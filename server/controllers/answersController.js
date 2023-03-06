import Answers from '../models/answersModel.js'
import mongoose from 'mongoose'

// Module Description:     This module fetch all records in the answers collection in mongoDB
export const getAnswers = (req, res) => {
    Answers.find()
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
}

// Module Description:     This module inserts a record into answers collection in mongoDB
export const createAnswer = (req, res) => {
    const newAnswer = new Answers({
        attendeeName: req.body.attendeeName,
        attendeeEmail: req.body.attendeeEmail,
        attendeePhone: req.body.attendeePhone,
        answerOne: req.body.answerOne,
        answerTwo: req.body.answerTwo,
        answerThree: req.body.answerThree,
        answerFour: req.body.answerFour,
        answerFive: req.body.answerFive,
        answerSix: req.body.answerSix,
        answerSeven: req.body.answerSeven,
        answerEight: req.body.answerEight,
        answerNine: req.body.answerNine,
        answerTen: req.body.answerTen,
        comments: req.body.comments,
        questionsId: req.body.questionsId
    })
    newAnswer.save()
        .then(answer => {
            console.log(answer)
            res.json(answer)
        })
        .catch(err => console.log(err))
}


// //Module Description:     This module fetch a particular record using AnswerID in the answers collection in mongoDB
// app.get("/getAnswer/:id", (req, res) => {
//     const id = req.params.id

//     Answer.find({id: id})
//     .then((result) => {
//         console.log(result)
//         res.send(result)
//     })
//     .catch((err) => 
//         console.log(err))
// })


// // Module Description:     This module updates a record in the answers collection in mongoDB
// app.patch("/updateAnswer/:id", (req, res) => {
//     Answers.findByIdAndUpdate(req.params._id, {
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

// // Module Description:     This module deletes a record in the answers collection in mongoDB
// app.delete("/deleteAnswer/:id", (req, res) => {
//     MyAnswers.findOneAndRemove({
//        id: req.params.id,
//     })
//     .then((result) => {
//        console.log(result)
//        res.send({message: 'Answer not found'})
//     })
//     .catch((err) => {
//        console.log(err)
//        res.send({message: 'Answer not found'})
//     })
// })



