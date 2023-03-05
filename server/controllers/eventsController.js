/*
Description:            This file contains the controller for all the APIs related to the Events
Author:                 Dario Ospina
*/
import Events from '../models/eventsModel.js'
import mongoose from 'mongoose'

/*
Module Name:            getEvents
Module Description:     This module fetch all records in the events collection in mongoDB
Author:                 Jeff Martin Abayon
*/
// app.get("/getEvents", (req, res) => {
//     Event.find()
//     .then((result) => {
//         console.log(result)
//         res.send(result)
//     })
//     .catch((err) => 
//         console.log(err))
// })



/*
Module Name:            getEvent
Module Description:     This module fetch a particular record using EventID in the events collection in mongoDB
Author:                 Jeff Martin Abayon
*/
// app.get("/getEvent/:id", (req, res) => {
//     const id = req.params.id

//     Event.find({id: id})
//     .then((result) => {
//         console.log(result)
//         res.send(result)
//     })
//     .catch((err) => 
//         console.log(err))
// })



/*
Module Name:            createEvent
Module Description:     This module inserts a record into events collection in mongoDB
Author:                 Dario Ospina
*/
export const createEvent = (req, res) => {
    const newEvent = new Events({
        eventname: req.body.eventname,
        eventdesc: req.body.eventdesc,
        eventdate: req.body.eventdate,
        venue: req.body.venue,
        eventcapacity: req.body.eventcapacity,
        qrcode: req.body.qrcode,
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
Module Name:            updateEvent
Module Description:     This module updates a record in the events collection in mongoDB
Author:                 Jeff Martin Abayon
*/ 
// app.patch("/deleteEvent/:id", (req, res) => {
//     Event.findByIdAndUpdate(req.params._id, {
//         _id: req.body._id 
//     }, {
//         new: true
//     })
//     .then((result) => {
//         console.log(result)
//         res.send(result)
//     })
//     .catch((err) => 
//         console.log(err))
// })



/*
Module Name:            deleteEvent
Module Description:     This module updates a record in the events collection in mongoDB
Author:                 Jeff Martin Abayon
*/ 
// app.delete("/updateEvent/:id", (req, res) => {
//     MyEvents.findOneAndRemove({
//        id: req.params.id,
//     })
//     .then((result) => {
//        console.log(result)
//        res.send({message: 'Event not found'})
//     })
//     .catch((err) => {
//        console.log(err)
//        res.send({message: 'Event not found'})
//     })
// })



