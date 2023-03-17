/*
Description:            This will make the routes for API for evaluation questions
Author:                 Dario Ospina / Jeff Martin Abayon
*/
import express from 'express'
import Questions from '../models/questionsModel.js'
import { createQuestionnaire, getQuestionaries, getQuestionsFromOneEvent, getQuestionnaireId} from '../controllers/questionsController.js'
//getQuestions, getQuestion,updateQuestion, deleteQuestion

const router = express.Router()

// GET all Questions 
router.get('/getQuestionaries', getQuestionaries)

// GET all Questions from One Event
router.get('/getQuestionsFromOneEvent/:questionsId', getQuestionsFromOneEvent)

// GET QuestionnaireId from EventId
router.get('/getQuestionnaireId/:eventId', getQuestionnaireId)

// // GEt a single Question
// router.get('/:id', getQuestion)

// POST a new Question
router.post('/createQuestionnaire', createQuestionnaire)

// // UPDATE Question
// router.delete('/:id', updateQuestion)

// // DELETE a Question
// router.patch('/:id', deleteQuestion)


export default router;