/*
Description:            This file contains the controller for all the APIs related to the Questions
Author:                 Dario Ospina / Jeff Martin Abayon
*/
import Questions from '../models/questionsModel.js'
import mongoose from 'mongoose'

// // Module Description:     This module fetch all questions for an event inside events collection in mongoDB
// app.get("/getQuestions/:id", (req, res) => {
//     Question.find()
//     .then((result) => {
//         console.log(result)
//         res.send(result)
//     })
//     .catch((err) => 
//         console.log(err))
// })

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

//Module Description:     This module inserts a record into questions collection in mongoDB
export const createQuestionary = (req,res) => {

}
app.post("/createQuestion", (req, res) => {
    const newQuestion = new Questions({
        question: req.body.question,
        eventId: req.body.eventId,
    });
    newQuestion.save()
        .then(myquestion => {
            console.log(myquestion)
            res.json(myquestion)
        })
        .catch(err => console.log(err))
})

// //Module Description:     This module updates a record in the questions collection in mongoDB
// app.patch("/updateQuestion/:id", (req, res) => {
//     Question.findByIdAndUpdate(req.params._id, {
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

// //Module Description:     This module updates a record in the questions collection in mongoDB
// app.delete("/deleteQuestion/:id", (req, res) => {
//     MyQuestions.findOneAndRemove({
//        id: req.params.id,
//     })
//     .then((result) => {
//        console.log(result)
//        res.send({message: 'Question not found'})
//     })
//     .catch((err) => {
//        console.log(err)
//        res.send({message: 'Question not found'})
//     })
// })
