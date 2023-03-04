/*
Module Name:            Create routes for events
Module Description:     This will make the routes for API for events / speaking engagements
Author:                 Jeff Martin Abayon 
*/

const express = require('express')

const Event = require('../models/eventsModel')

const {
    getEvents,
    getPastEvents,
    getFutureEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
} = require('../controllers/eventsController')

// PENDING - authorization
// const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// PENDING - require auth for all course routes
// router.use(requireAuth)

// GET all Events 
router.get('/', getEvents)

// GET all Past Events 
router.get('/', getPastEvents)

// GET all FutureEvents 
router.get('/', getFutureEvents)

// GEt a single Event
router.get('/:id', getEvent)

// POST a new Event
router.post('/', createEvent)

// UPDATE Event
router.delete('/:id', updateEvent)

// DELETE a Event
router.patch('/:id', deleteEvent)


module.exports = router