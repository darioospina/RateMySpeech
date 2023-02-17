const Question = require('../models/questionsModel')
const mongoose = require('mongoose')


/*
Module Name:            getQuestions
Module Description:     This module fetch all questions for an event inside events collection in mongoDB
Author:                 Jeff Martin Abayon
*/
app.get("/getQuestions/:id", (req, res) => {
    Question.find()
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
})



/*
Module Name:            getQuestion
Module Description:     This module fetch a particular question in the questions collection in mongoDB
Author:                 Jeff Martin Abayon
*/
app.get("/getQuestion/:id", (req, res) => {
    const id = req.params.id

    Question.find({id: id})
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
})



/*
Module Name:            createQuestion
Module Description:     This module inserts a record into questions collection in mongoDB
Author:                 Jeff Martin Abayon
*/
app.post("/createQuestion", (req, res) => {
    const newQuestion = new Question({
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



/*
Module Name:            updateQuestion
Module Description:     This module updates a record in the questions collection in mongoDB
Author:                 Jeff Martin Abayon
*/ 
app.patch("/updateQuestion/:id", (req, res) => {
    Question.findByIdAndUpdate(req.params._id, {
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
Module Name:            deleteQuestion
Module Description:     This module updates a record in the questions collection in mongoDB
Author:                 Jeff Martin Abayon
*/ 
app.delete("/deleteQuestion/:id", (req, res) => {
    MyQuestions.findOneAndRemove({
       id: req.params.id,
    })
    .then((result) => {
       console.log(result)
       res.send({message: 'Question not found'})
    })
    .catch((err) => {
       console.log(err)
       res.send({message: 'Question not found'})
    })
})

module.exports = {
    getQuestions,
    getQuestion,
    createQuestion,
    updateQuestion,
    deleteQuestion
}