/*
Module Name:            Create routes for event's attendees
Module Description:     This will make the routes for API for event's attendees
Author:                 Jeff Martin Abayon, Student ID: 424191
Input:                  None
Output:                 None
Date Started:           Feb 9, 2023
Date Last Updated:      Feb 10, 2023
*/

const express = require('express')

const Attendee = require('../models/answersModel')

const {
    getAttendees,
    getAttendee,
    createAttendee
} = require('../controllers/answersController')

// PENDING - authorization
// const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// PENDING - require auth for all course routes
// router.use(requireAuth)

// GET all Attendees 
router.get('/', getAttendees)

// GEt a single Attendee
router.get('/:id', getAttendee)

// POST a new Attendee
router.post('/', createAttendee)



module.exports = router