/*
Description:            This file contains the controller for all the APIs related to the Events
Author:                 Dario Ospina
*/
import Events from '../models/eventsModel.js'
import mongoose from 'mongoose'

/*
Description:            This module fetch all records in the events collection in mongoDB
Author:                 Dario Ospina
*/
export const getEvents = (req, res) => {
    Events.find()
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
}

/*
Name:                   GetEvent
Description:            Get event by Id
Author:                 Jeff Abayon
*/
export const getEventByID = (req, res) => {
    const EventId = req.params.EventId

    Events.find({"_id": mongoose.Types.ObjectId(EventId)})
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
}


/*
Name:                   createEvent
Description:            insert a record into database
Author:                 Jeff Abayon
*/
export const createEvent = (req, res) => {
    const newEvent = new Events({
        eventname: req.body.eventname,
        eventdesc: req.body.eventdesc,
        eventdate: req.body.eventdate,
        venue: req.body.venue,
        state: req.body.state,
        eventcapacity: req.body.eventcapacity,
        speakerId: req.body.speakerId 
    });
    newEvent.save()
        .then(myevent => {
            console.log(myevent)
            res.json(myevent)
        })
        .catch((err) => {
            console.log(err)
        })
}


/*
Name:                   updateEventById
Description:            update an event in the database
Author:                 Jeff Abayon
*/
export const updateEventById = (req, res) => {
    const EventId = req.params.EventId

    const eventName = req.body.eventName
    const eventDesc = req.body.eventDesc
    const eventDate = req.body.eventDate
    const Venue = req.body.Venue
    const State = req.body.State
    const eventCapacity = req.body.eventCapacity

    Events.updateOne(
        {"_id": mongoose.Types.ObjectId(EventId)},
        {
            $set: {
                "eventname": eventName,
                "eventdesc": eventDesc,
                "eventdate": eventDate,
                "venue": Venue,
                "state": State,
                "eventcapacity": eventCapacity
            }
        }
    )
    .then((result) => {
        console.log(result)
        res.send(`Event with ID ${EventId} successfully updated`)
    })
    .catch((err) => console.log(err))
}


/*
Name:                   deleteEventById
Description:            delete an event in the database
Author:                 Jeff Abayon
*/
export const deleteEventById = (req, res) => {
    const EventId = req.params.EventId

    Events.deleteOne({"_id": mongoose.Types.ObjectId(EventId)})
    .then((result) => {
        console.log(result)
        res.send(`Event with ID ${EventId} successfully deleted`)
    })
    .catch((err) => console.log(err))
}