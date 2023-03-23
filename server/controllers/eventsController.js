/*
Description:            This file contains the controller for all the APIs related to the Events
Author:                 Dario Ospina
*/
import Events from '../models/eventsModel.js'
import mongoose from 'mongoose'

// This module fetch all records in the events collection in mongoDB
export const getEvents = (req, res) => {
    Events.find()
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
}


// This module fetch a particular record using EventID in the events collection in mongoDB
export const getEventsBySpeaker = (req, res) => {
    const SpeakerId = req.params.speakerId
    
    Events.find({ speakerId: SpeakerId }).sort({eventdate: -1})
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
}


// This module fetches the information from One Event based on the EvenId
export const getEventByID = (req, res) => {
    const EventId = req.params.eventId
    
    Events.findOne({"_id": mongoose.Types.ObjectId(EventId)})
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
}

// This module inserts a record into events collection in mongoDB
export const createEvent = (req, res) => {
    const newEvent = new Events({
        eventname: req.body.eventname,
        eventdesc: req.body.eventdesc,
        eventdate: req.body.eventdate,
        venue: req.body.venue,
        eventcapacity: req.body.eventcapacity,
        qrcode: req.body.qrcode,
        speakerId: req.body.speakerId,
        questionsId: req.body.questionsId
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


// Update the QuestionnaireId for One Event once the Questionnaire is created
export const updateQuestionnaireId = (req, res) => {
    const eventId = req.params.eventId;
    const questionnaireId = req.body.questionnaireId;
  
    return Events.updateOne(
      { "_id": mongoose.Types.ObjectId(eventId) },
      {
        $set: {
          "questionsId": questionnaireId
        }
      }
    )
      .then((result) => {
        console.log(result)
        res.send(result)
      })
      .catch((err) => 
        console.log(err))
  }


// Module Description:     This module updates a record in the events collection in mongoDB
export const deleteOneEvent = (req, res) => {
    const eventId = req.params.eventId

    Events.deleteOne({"_id": mongoose.Types.ObjectId(eventId)})
    .then((result) => {
        console.log(result)
        res.send(`Event with ID ${eventId} successfully deleted`)
    })
    .catch((err) => console.log(err))
}
