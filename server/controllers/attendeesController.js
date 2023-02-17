const Attendee = require('../models/attendeesModel')
const mongoose = require('mongoose')

/*
Module Name:            getAttendees
Module Description:     This module fetch all records in the attendees collection in mongoDB
Author:                 Jeff Martin Abayon
*/
app.get("/getAttendees/:id", (req, res) => {
    Attendee.find({eventID: eventID})
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
})



/*
Module Name:            getAttendee
Module Description:     This module fetch a particular record using attendeeID in the attendees collection in mongoDB
Author:                 Jeff Martin Abayon
*/
app.get("/getAttendee/:id", (req, res) => {
    const id = req.params.id

    Attendee.find({id: id})
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
})



/*
Module Name:            createAttendee
Module Description:     This module inserts a record into attendees collection in mongoDB
Author:                 Jeff Martin Abayon
*/
app.post("/createAttendee", (req, res) => {
    const newAttendee = new Attendee({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        eventId: req.body.eventId 
    });
    newAttendee.save()
        .then(myattendee => {
            console.log(myattendee)
            res.json(myattendee)
        })
        .catch(err => console.log(err))
})



module.exports = {
    getAttendees,
    getAttendee,
    createAttendee
}
