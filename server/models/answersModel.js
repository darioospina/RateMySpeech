/*
Module Name:            Create a schema for audiences' answers to evaluation questions
Module Description:     This will make the data model for audiences' answers to evaluation questions
Author:                 Jeff Martin Abayon, Student ID: 424191
Input:                  None
Output:                 None
Date Started:           Feb 9, 2023
Date Last Updated:      Feb 10, 2023
*/


const mongoose = require('mongoose')

const Schema = mongoose.Schema

const answersSchema = new Schema({
	answer: {
		type: number,
		required: true
	},
	questionId: {
		type: objectId,
		required: true
	},
	attendeeId: {
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

module.exports = mongoose.model('Course', answersSchema)