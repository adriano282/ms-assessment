const FilledAssessment = require('../models/filledAssessment');

const Category = require('../models/category');

const Question = require('../models/question');

const Assessment = require('../models/assessment');

function getCategory(id, questions) {
	const category = Category.findById(id);
	category.questions = questions;
	return category;
}

function getAlternativeWeight(question, alternativeId) {
	return parseFloat(question.alternatives[alternativeId].weight);
}

function createAssessment(body, categories) {
	return new Assessment(
		body.microserviceOwner,
		body.microserviceName,
		categories,
		body['version'],
		body.microserviceDomain,
		body.microserviceTeam,
		body.assessmentRespondent
	);
}

function buildAssessmentAndPontuation(req) {
	let maxQuestions = Question.count();

	const categories = [];
	let sumPontuation = 0;
	let questions = [];
	let categoryIdBefore = 0;
	for (let i = 1; i <= maxQuestions; i++) {

		let questionId = i;
		let alternativeId = req.body[questionId];
		let question = Question.findQuestionById(questionId);
		question.alternatives[alternativeId -1].selected = true;

		if (categoryIdBefore == 0) {
			categoryIdBefore++;
		}
		else if (categoryIdBefore != question.categoryId) {
			
			categories.push(getCategory(
				categoryIdBefore == 0 ? question.categoryId : categoryIdBefore,
				questions
			));

			questions = [];
			categoryIdBefore = question.categoryId;	
		}
		
		questions.push(question);
		sumPontuation = (sumPontuation + getAlternativeWeight(question, alternativeId -1));
		console.log("Pontos " + sumPontuation);

		if (i == maxQuestions) {
			categories.push(getCategory(
				question.categoryId,
				questions
			));
			console.log(categories);
		}
	}

	const assessment = createAssessment(req.body, categories);
	sumPontuation = sumPontuation.toFixed(2);
	return {
		assessment,
		sumPontuation
	}
}

exports.postFilledAssessment =  (req, res, next) => {

	const result = buildAssessmentAndPontuation(req);
	
	new FilledAssessment({
		assessment: result.assessment,
        pontuation: result.sumPontuation,
		takenDate: new Date(),
		yearTaken: '' + new Date().getFullYear(),
		monthTaken: ('0' + (new Date().getMonth() + 1).slice(-2)),
		microserNameAssessmentYearAndMonth: result.assessment.microserviceName + new Date().getFullYear() + new Date().getMonth() + 1
	})
	.save()
	.then(() => {console.log('filledAssessment Saved')})
	.catch((err) => {console.log(err)});

	res.render('success-submission');
}

exports.getFilledAssessments = (req, res, next) => {

	const {page} = req.query;

	const options = {
		page: parseInt(page),
		limit: 10
	}

	FilledAssessment.paginate({}, options)
	.then((results, err) => {
			if (err) {
				console.log(err);
			} else {
				res.render('list-assessments', {assessments: results.docs, page_count: results.totalPages, current_page: !page ? 1 : parseInt(page)});		
			}
		}
	);
}

exports.getFilledAssessmentById = (req, res, next) => {
	FilledAssessment.findOne({ _id: req.params.assessmentId })
	.then(result => {
		res.render('assessment', {assessment: result.assessment, pontuation: result.pontuation});
	})
	.catch((err) => {console.log(err)});
}

exports.getTemplateAssessment = (req, res, next) => {
	const categories = Category.fetchAll(true);

	res.render('new', {categories : categories});
};


function getColor() {
	return 'rgb(' 
		+ Math.floor(Math.random() * 256) + ', ' 
		+ Math.floor(Math.random() * 256) + ', ' 
		+ Math.floor(Math.random() * 256)+')';
}

exports.getResultsByDomain = (req, res, next) => {

	let minMonth;
	let minYear;

	let maxMonth;
	let maxYear;

	let finalLabels = []
	FilledAssessment
		.aggregate(

			[
				{ "$match" : { 'assessment.microserviceDomain': req.params.domain }},
				{ "$project" : { 
					yearPlusMonth: {"$concat" : [ { "$toString" : "$yearTaken" } , "$monthTaken" ]},
					year: '$yearTaken',
					month: '$monthTaken'
					}
				},
				{ "$group": {
					_id: null,
					max: {"$max" : "$yearPlusMonth" },
					min: {"$min" : "$yearPlusMonth" }
									}
				}
			]
		).then(docs => {
			
			let start = parseInt(docs[0].min);
			let end = parseInt(docs[0].max);

			for (let i = start; i <= end; i++) {
				finalLabels.push(('' + i).slice(-2) + '/'+ ('' + i).slice(0, 4));
			}
		});


	FilledAssessment
		.aggregate(
			[
				{ "$match" : { 'assessment.microserviceDomain': req.params.domain }},
				{ "$sort": { takenDate: 1}},
				{ "$group": {
					_id: "$microserNameAssessmentYearAndMonth",
					microservice: { $first: "$assessment.microserviceName" },
					date: { $first: "$takenDate"},
					grade: { $first : "$pontuation"},
					year: { $first : "$yearTaken"},
					month: { $first : "$monthTaken"},
				}}
			]
		)
		.sort({date: 1})
		.sort({microservice: -1})
		.then(docs => {
			let first;
			let datasets =  [];
			let grades = [];
		
			for (let i = 0, l = 0; i < docs.length; i++, l++) {
				if (!first) {
					first = docs[i].microservice;

				}

				if (first != docs[i].microservice) {
					let color = getColor();
					datasets.push(
						{
							label: docs[i-1].microservice,
							backgroundColor: color,
							borderColor: color,
							data: [...grades],
						}
					);

					l = 0;
					grades = [];
					first = docs[i].microservice;
				} 

				let label = docs[i].month + '/' + docs[i].year;
				while (label != finalLabels[l]) {

					if (grades.length > 0) {
						grades.push(grades[grades.length-1]);
					}
					else {
						grades.push(null);
					}
					
					if ((grades.length -1) == l) {
						break;
					}
					else {l++;}
				}
				
				grades.push(docs[i].grade);
			
				if (i+1 == docs.length) {
					let color = getColor();
					datasets.push(
						{
							label: docs[i].microservice,
							backgroundColor: color,
							borderColor: color,
							data: [...grades],
						}
					);
				}
			}
		
		


			const setup = {
				type: 'line',
				data: {
					labels: finalLabels,
					datasets: datasets
				},
				options: {}
			}	
			res.render('assessmentsByDomain', {setup: setup, domain: req.params.domain});
		});
		


}