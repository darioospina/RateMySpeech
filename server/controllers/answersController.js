import Answer from '../models/answersModel.js'
import mongoose from 'mongoose'

/*
Module Name:            getAnswers
Module Description:     This module fetch all records in the answers collection in mongoDB
Author:                 Jeff Martin Abayon
*/
app.get("/getAnswers", (req, res) => {
    Answer.find()
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
})



/*
Module Name:            getAnswer
Module Description:     This module fetch a particular record using AnswerID in the answers collection in mongoDB
Author:                 Jeff Martin Abayon
*/
app.get("/getAnswer/:id", (req, res) => {
    const id = req.params.id

    Answer.find({id: id})
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
})



/*
Module Name:            createAnswer
Module Description:     This module inserts a record into answers collection in mongoDB
Author:                 Jeff Martin Abayon
*/
app.post("/createAnswer", (req, res) => {
    const newAnswer = new Answer({
        questionId: req.body.questionId,
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
        comment: req.body.comment,
    });
    newAnswer.save()
        .then(myanswer => {
            console.log(myanswer)
            res.json(myanswer)
        })
        .catch(err => console.log(err))
})



/*
Module Name:            updateAnswer
Module Description:     This module updates a record in the answers collection in mongoDB
Author:                 Jeff Martin Abayon
*/ 
app.patch("/updateAnswer/:id", (req, res) => {
    Answers.findByIdAndUpdate(req.params._id, {
        _id: req.body._id 
    }, {
        new: true
    })
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
})



/*
Module Name:            deleteAnswer
Module Description:     This module deletes a record in the answers collection in mongoDB
Author:                 Jeff Martin Abayon
*/ 
app.delete("/deleteAnswer/:id", (req, res) => {
    MyAnswers.findOneAndRemove({
       id: req.params.id,
    })
    .then((result) => {
       console.log(result)
       res.send({message: 'Answer not found'})
    })
    .catch((err) => {
       console.log(err)
       res.send({message: 'Answer not found'})
    })
})



module.exports = {
    getAnswers,
    getAnswer,
    createAnswer,
    updateAnswer,
    deleteAnswer
}
