const FilledAssessment = require('../models/filledAssessment');

const Category = require('../models/category');

const Question = require('../models/question');

const Assessment = require('../models/assessment');

var idGenerator = 0;

function nextId() {
	return ++idGenerator;
}

function setupAndSaveCategory(id, questions, categories) {
	let category = Category.findById(id);
	category.questions = questions;
	categories.push(category);
}

function getAlternativeWeight(question, alternativeId) {
	return parseInt(question.alternatives[alternativeId].weight);
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

		if (categoryIdBefore != question.categoryId && categoryIdBefore > 0) {
			
			setupAndSaveCategory(
				categoryIdBefore == 0 ? question.categoryId : categoryIdBefore,
				questions,
				categories
			);

			questions = [];
			categoryIdBefore = question.categoryId;	
		}
		
		questions.push(question);
		sumPontuation += getAlternativeWeight(question, alternativeId -1);

		if (i == maxQuestions) {
			setupAndSaveCategory(
				question.categoryId,
				questions,
				categories
			);
		}
	}

	const assessment = createAssessment(req.body, categories);
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
		takenDate: new Date()
	})
	.save()
	.then(() => {console.log('filledAssessment Saved')})
	.catch((err) => {console.log(err)});

	res.render('success-submission');
}

exports.getFilledAssessments = (req, res, next) => {
	FilledAssessment.find()
	.then(
		assessments => {
			res.render('list-assessments', {assessments: assessments});
		}
	)
	.catch((err=> {console.log(err)}));
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