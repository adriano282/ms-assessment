const filledAssessments = [];

const mongoose = require('mongoose');

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
   }
});

module.exports = mongoose.model('FilledAssessment', filledAssessmentSchema);