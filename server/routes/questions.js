/*
Description:            This will make the routes for API for evaluation questions
Author:                 Dario Ospina / Jeff Martin Abayon
*/
import express from 'express'
import Questions from '../models/questionsModel.js'
import { createQuestionnaire, getQuestionaries, getQuestionsFromOneEvent, getQuestionnaireId} from '../controllers/questionsController.js'

const router = express.Router()

// GET all Questions 
router.get('/getQuestionaries', getQuestionaries)

// GET all Questions from One Event
router.get('/getQuestionsFromOneEvent/:questionsId', getQuestionsFromOneEvent)

// GET QuestionnaireId from EventId
router.get('/getQuestionnaireId/:eventId', getQuestionnaireId)

// POST a new Question
router.post('/createQuestionnaire', createQuestionnaire)

export default router;