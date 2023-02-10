/*
Module Name:            Create routes for evaluation questions
Module Description:     This will make the routes for API for evaluation questions
Author:                 Jeff Martin Abayon, Student ID: 424191
Input:                  None
Output:                 None
Date Started:           Feb 9, 2023
Date Last Updated:      Feb 10, 2023
*/

const express = require('express')

const Question = require('../models/questionsModel')

const {
    getQuestions,
    getQuestion,
    createQuestion,
    updateQuestion,
    deleteQuestion
} = require('../controllers/questionsController')

// PENDING - authorization
// const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// PENDING - require auth for all course routes
// router.use(requireAuth)

// GET all Questions 
router.get('/', getQuestions)

// GEt a single Question
router.get('/:id', getQuestion)

// POST a new Question
router.post('/', createQuestion)

// UPDATE Question
router.delete('/:id', updateQuestion)

// DELETE a Question
router.patch('/:id', deleteQuestion)


module.exports = router