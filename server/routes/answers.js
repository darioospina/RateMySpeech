/*
Module Name:            Create routes for answers to evaluation questions
Module Description:     This will make the routes for API for answers to evaluation questions
Author:                 Jeff Martin Abayon 
*/

// this is pending, need to decide if audience can edit and update answers to evaluation questions. also, if audience can view a single answer

const express = require('express')

const Answer = require('../models/answersModel')

const {
    getAnswers,
    getAnswer,
    createAnswer,
    updateAnswer,
    deleteAnswer
} = require('../controllers/answersController')

// PENDING - authorization
// const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// PENDING - require auth for all course routes
// router.use(requireAuth)

// GET all Answers 
router.get('/', getAnswers)

// GEt a single Answer
router.get('/:id', getAnswer)

// POST a new Answer
router.post('/', createAnswer)

// UPDATE Answer
router.delete('/:id', updateAnswer)

// DELETE a Answer
router.patch('/:id', deleteAnswer)


module.exports = router