/*
Description:            This file contains the controller for all the APIs related to the Questions
Author:                 Dario Ospina / Jeff Martin Abayon
*/
import Questions from '../models/questionsModel.js'
import mongoose from 'mongoose'

// This module fetch all questions for an event inside events collection in mongoDB
export const getQuestionaries = (req, res) => {
    Questions.find()
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
}

// This module gets all the questions from an specific event
export const getQuestionsFromOneEvent = (req, res) => {
    const questionsId = req.params.questionsId

    Questions.findOne({_id: questionsId})
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => console.log(err))
}


// Get the QuestionnaireId for an Specific Event
export const getQuestionnaireId = (req, res) => {
    const EventId = req.params.eventId

    Questions.findOne({eventId: EventId})
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
}

// // Module Description:     This module fetch a particular question in the questions collection in mongoDB
// app.get("/getQuestion/:id", (req, res) => {
//     const id = req.params.id

//     Question.find({id: id})
//     .then((result) => {
//         console.log(result)
//         res.send(result)
//     })
//     .catch((err) => 
//         console.log(err))
// })

// This module inserts a record into questions collection in mongoDB
export const createQuestionnaire = (req, res) => {
    const newQuestionnaire = new Questions({
        questionOne: req.body.questionOne,
        questionTwo: req.body.questionTwo,
        questionThree: req.body.questionThree,
        questionFour: req.body.questionFour,
        questionFive: req.body.questionFive,
        questionSix: req.body.questionSix,
        questionSeven: req.body.questionSeven,
        questionEight: req.body.questionEight,
        questionNine: req.body.questionNine,
        questionTen: req.body.questionTen,
        eventId: req.body.eventId
    })
    newQuestionnaire.save()
        .then(Questionnaire => {
            console.log(Questionnaire)
            res.json(Questionnaire)
        })
        .catch(err => console.log(err))
}

