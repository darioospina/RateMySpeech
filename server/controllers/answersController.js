import Answers from '../models/answersModel.js'
import mongoose from 'mongoose'

/*
Name:                   getAllAnswersByQuestionId
Description:            get answers by question id
Author:                 Jeff Abayon
*/
export const getAllAnswersByQuestionId = (req, res) => {
    const QuestionId = req.params.QuestionId

    Answers.find({"_id": mongoose.Types.ObjectId(QuestionId)})
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
}

/*
Name:                   getAnswersByAnswerId
Description:            get answers by answer id
Author:                 Jeff Abayon
*/
export const getAnswersByAnswerId = (req, res) => {
    const AnswerId = req.params.AnswerId

    Answers.find({"_id": mongoose.Types.ObjectId(AnswerId)})
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
}



/*
Name:                   createAnswer
Description:            insert answers into the database
Author:                 Jeff Abayon
*/export const createAnswer = (req, res) => {
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


/*
Name:                   deleteAnswersById
Description:            delete a answers in the database
Author:                 Jeff Abayon
*/
export const deleteAnswersById = (req, res) => {
    const AnswerId = req.params.AnswerId

    Answers.deleteOne({"_id": mongoose.Types.ObjectId(AnswerId)})
    .then((result) => {
        console.log(result)
        res.send(`Answers with ID ${AnswerId} successfully deleted`)
    })
    .catch((err) => console.log(err))
}

