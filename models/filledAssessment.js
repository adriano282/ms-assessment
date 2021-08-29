const filledAssessments = [];

const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema;

const filledAssessmentSchema = new Schema({
   assessment: {},
   pontuation: {
       type: Number,
       required: true
   },
   takenDate: {
       type: Date,
        required: true
   },
   yearTaken: {
       type: Number,
       required: true
   },
   monthTaken: {
       type: Number,
       required: true
   },
   microserNameAssessmentYearAndMonth: {
       type: String,
       required: true
   }

});

filledAssessmentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('FilledAssessment', filledAssessmentSchema);