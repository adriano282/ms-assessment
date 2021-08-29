const path = require('path');

const express = require('express');

const assessmentController = require('../controllers/assessments');

const router = express.Router();

router.get('/', assessmentController.getFilledAssessments);
router.get('/assessments/domain/:domain', assessmentController.getResultsByDomain);
router.get('/assessment/:assessmentId', assessmentController.getFilledAssessmentById);
router.get('/new-assessment', assessmentController.getTemplateAssessment);
router.post('/submit-assessment', assessmentController.postFilledAssessment);

module.exports = router;
