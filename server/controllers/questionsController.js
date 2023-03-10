/*
Description:            This file contains the controller for all the APIs related to the Questions
Author:                 Dario Ospina / Jeff Martin Abayon
*/
import Questions from '../models/questionsModel.js'
import mongoose from 'mongoose'

/*
Name:                   getQuestionnaireById
Description:            get questionaire by event id
Author:                 Jeff Abayon
*/
export const getQuestionnaireById = (req, res) => {
    const EventId = req.params.EventId

    Questions.find({"_id": mongoose.Types.ObjectId(EventId)})
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
}


/*
Name:                   createQuestionnaire
Description:            update an event in the database
Author:                 Jeff Abayon
*/
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


/*
Name:                   UpdateQuestionnaireById
Description:            update an event in the database
Author:                 Jeff Abayon
*/
export const UpdateQuestionnaireById = (req, res) => {
    const QuestionId = req.params.QuestionId

    const questionOne = req.body.questionOne
    const questionTwo = req.body.questionTwo
    const questionThree = req.body.questionThree
    const questionFour = req.body.questionFour
    const questionFive = req.body.questionFive
    const questionSix = req.body.questionSix
    const questionSeven = req.body.questionSeven
    const questionEight = req.body.questionEight
    const questionNine = req.body.questionNine
    const questionTen = req.body.questionTen

    Questions.updateOne(
        {"_id": mongoose.Types.ObjectId(QuestionId)},
        {
            $set: {
                "questionOne": questionOne,
                "questionTwo": questionTwo,
                "questionThree": questionThree,
                "questionFour": questionFour,
                "questionFive": questionFive,
                "questionSix": questionSix,
                "questionSeven": questionSeven,
                "questionEight": questionEight,
                "questionNine": questionNine,
                "questionTen": questionTen,
            }
        }
    )
    .then((result) => {
        console.log(result)
        res.send(`User with ID ${UserId} successfully updated`)
    })
    .catch((err) => console.log(err))
}

/*
Name:                   deleteQuestionaireById
Description:            delete a questionaire in the database
Author:                 Jeff Abayon
*/
export const deleteQuestionaireById = (req, res) => {
    const QuestionId = req.params.QuestionId

    Questions.deleteOne({"_id": mongoose.Types.ObjectId(QuestionId)})
    .then((result) => {
        console.log(result)
        res.send(`Questionaire with ID ${QuestionId} successfully deleted`)
    })
    .catch((err) => console.log(err))
}