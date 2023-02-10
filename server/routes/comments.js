/*
Module Name:            Create routes for audience comments and suggestions
Module Description:     This will make the routes for API for audience comments and suggestions
Author:                 Jeff Martin Abayon, Student ID: 424191
Input:                  None
Output:                 None
Date Started:           Feb 9, 2023
Date Last Updated:      Feb 10, 2023
*/

const express = require('express')

const Comment = require('../models/commentsModel')

const {
    getComments,
    getComment,
    createComment,
    deleteComment
} = require('../controllers/commentsController')

// PENDING - authorization
// const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// PENDING - require auth for all course routes
// router.use(requireAuth)

// GET all Comments 
router.get('/', getComments)

// GEt a single Comment
router.get('/:id', getComment)

// POST a new Comment
router.post('/', createComment)

// DELETE a Comment
router.patch('/:id', deleteComment)


module.exports = router