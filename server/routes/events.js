/*
Module Description:     This will make the routes for API for events / speaking engagements
Author:                 Dario Ospina / Jeff Martin Abayon 
*/
import express from 'express'
import Events from '../models/eventsModel.js'
import {createEvent, getEvents, getEventsBySpeaker, getEventByID, updateQuestionnaireId, deleteOneEvent} from '../controllers/eventsController.js'

const router = express.Router()


// GET all Events 
router.get('/getEvents', getEvents)

// UPDATE the QuestionnaireId for ONE Event
router.patch('/updateQuestionnaireId/:eventId', updateQuestionnaireId)

// GET a single Event from SpeakerId
router.get('/getEventsBySpeaker/:speakerId', getEventsBySpeaker)

// GET a single Event from EventId
router.get('/getEventByID/:eventId', getEventByID)

// POST a new Event
router.post('/createEvent', createEvent)

// DELETE one Event
router.delete('/deleteOneEvent/:eventId', deleteOneEvent)

export default router;