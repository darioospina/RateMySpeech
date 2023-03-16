/*
Module Description:     This will make the routes for API for answers to evaluation questions
Author:                 Dario Ospina / Jeff Martin Abayon 
*/
import express from 'express'
import Answers from '../models/answersModel.js'
import { getAnswers, createAnswer, getReportInfo, getAnswersByQuestionnaire } from '../controllers/answersController.js'

const router = express.Router()

// GET all Answers 
router.get('/getAnswers', getAnswers)

// POST a new Answer
router.post('/createAnswer', createAnswer)

// GET all the Answers from One Questionnaire
router.get('/getAnswersByQuestionnaire/:questionnaireId', getAnswersByQuestionnaire)

// GET a report with the information from One Questionnaire
router.get('/getReportInfo/:questionnaireId', getReportInfo)

// // GET a single Answer
// router.get('/:id', getAnswer)

// // UPDATE Answer
// router.delete('/:id', updateAnswer)

// // DELETE a Answer
// router.patch('/:id', deleteAnswer)

export default router;