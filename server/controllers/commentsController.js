const Comment = require('../models/commentsModel')
const mongoose = require('mongoose')

/*
Module Name:            getComments
Module Description:     This module fetch all records in the comments collection in mongoDB
Author:                 Jeff Martin Abayon
*/
app.get("/getComments/:id", (req, res) => {
    Comment.find({eventID: eventID})
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
})



/*
Module Name:            getComment
Module Description:     This module fetch a particular record using commentID in the comments collection in mongoDB
Author:                 Jeff Martin Abayon
*/
app.get("/getComment/:id", (req, res) => {
    const id = req.params.id

    Comment.find({id: id})
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
})



/*
Module Name:            createComment
Module Description:     This module creates a record in the comments collection in mongoDB
Author:                 Jeff Martin Abayon
*/ 
app.post("/createComment", (req, res) => {
    const newComment = new Comment({
        comment: req.body.comment,
        suggestion: req.body.suggestion,
        eventId: req.body.eventId
    });
    newComment.save()
        .then(mycomment => {
            console.log(mycomment)
            res.json(mycomment)
        })
        .catch(err => console.log(err))
})



/*
Module Name:            deleteComment
Module Description:     This module deletes a record in the comments collection in mongoDB
Author:                 Jeff Martin Abayon
*/ 
app.delete("/deleteComment/:id", (req, res) => {
    MyComments.findOneAndRemove({
       id: req.params.id,
    })
    .then((result) => {
       console.log(result)
       res.send({message: 'Comment not found'})
    })
    .catch((err) => {
       console.log(err)
       res.send({message: 'Comment not found'})
    })
})



module.exports = {
    getComments,
    getComment,
    createComment,
    deleteComment
}
