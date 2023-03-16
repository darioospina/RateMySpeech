/*
Module Description:     This will make the routes for API for events / speaking engagements
Author:                 Dario Ospina / Jeff Martin Abayon 
*/
import express from 'express'
import Events from '../models/eventsModel.js'
import {createEvent, getEvents, getEventsBySpeaker, getEventByID} from '../controllers/eventsController.js'


const router = express.Router()

// PENDING - require auth for all course routes
// router.use(requireAuth)

// GET all Events 
router.get('/getEvents', getEvents)

// GET all Past Events 
//router.get('/', getPastEvents)

// GET all FutureEvents 
//router.get('/', getFutureEvents)

// GET a single Event from SpeakerId
router.get('/getEventsBySpeaker/:speakerId', getEventsBySpeaker)

// GET a single Event from EventId
router.get('/getEventByID/:eventId', getEventByID)

// POST a new Event
router.post('/createEvent', createEvent)

// UPDATE Event
//router.delete('/:id', updateEvent)

// DELETE a Event
//router.patch('/:id', deleteEvent)

export default router;