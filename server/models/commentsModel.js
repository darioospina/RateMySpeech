/*
Module Name:            Create a schema for audiences' comments and suggestions to speakers
Module Description:     This will make the data model for audiences' comments and suggestions to speakers
Author:                 Jeff Martin Abayon, Student ID: 424191
Input:                  None
Output:                 None
Date Started:           Feb 9, 2023
Date Last Updated:      Feb 9, 2023
*/


const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentsSchema = new Schema({
	comment: {
		type: String,
		required: true
	},
	suggestion: {
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

module.exports = mongoose.model('Course', commentsSchema)