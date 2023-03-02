/*
Module Name:            Create routes for events
Module Description:     This will make the routes for API for events / speaking engagements
Author:                 Jeff Martin Abayon, Student ID: 424191
Input:                  None
Output:                 None
Date Started:           Feb 9, 2023
Date Last Updated:      Feb 10, 2023
*/
import express from 'express'
import Events from '../models/eventsModel.js'
import {createEvent} from '../controllers/eventsController.js'


const router = express.Router()

// PENDING - require auth for all course routes
// router.use(requireAuth)

// GET all Events 
//router.get('/', getEvents)

// GET all Past Events 
//router.get('/', getPastEvents)

// GET all FutureEvents 
//router.get('/', getFutureEvents)

// GEt a single Event
//router.get('/:id', getEvent)

// POST a new Event
router.post('/', createEvent)

// UPDATE Event
//router.delete('/:id', updateEvent)

// DELETE a Event
//router.patch('/:id', deleteEvent)

export default router;