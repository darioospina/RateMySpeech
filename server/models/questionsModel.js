/*
Module Name:            Create a schema for questions for events 
Module Description:     This will make the data model for questions given by the speaker
Author:                 Jeff Martin Abayon, Student ID: 424191
Input:                  None
Output:                 None
Date Started:           Feb 9, 2023
Date Last Updated:      Feb 9, 2023
*/


const mongoose = require('mongoose')

const Schema = mongoose.Schema

const questionsSchema = new Schema({
	question: {
		type: String,
		required: true
	},
	eventId: {
		type: objectId,
		required: true
	},
	createdAt: {
	   type: "date",
		required: true
	},
	updatedAt: {
	   type: "date",
		required: true
	}
})

module.exports = mongoose.model('Course', questionsSchema)