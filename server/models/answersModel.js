/*
Module Name:            Create a schema for audiences' answers to evaluation questions
Module Description:     This will make the data model for audiences' answers to evaluation questions together with their comments/suggestions
Author:                 Jeff Martin Abayon
*/

//dd
const mongoose = require('mongoose') 

const Schema = mongoose.Schema

const answersSchema = new Schema({
	questionId: {
		type: objectId,
		required: true
	},
	attendeeName: {
		type: String,
		required: true
	},
	attendeeEmail: {
		type: String,
		required: true
	},
	attendeePhone: {
		type: String,
		required: true
	},
	answerOne: {
		type: number,
		required: true
	},
	answerTwo: {
		type: number,
		required: false
	},
	answerThree: {
		type: number,
		required: false
	},
	answerFour: {
		type: number,
		required: false
	},
	answerFive: {
		type: number,
		required: false
	},
	answerSix: {
		type: number,
		required: false
	},
	answerSeven: {
		type: number,
		required: false
	},
	answerEight: {
		type: number,
		required: false
	},
	answerNine: {
		type: number,
		required: false
	},
	answerTen: {
		type: number,
		required: false
	},
	comment: {
		type: String,
		required: false
	},
	createdAt: {
	   type: Date,
		required: true
	},
	updatedAt: {
	   type: Date,
		required: true
	}
})

module.exports = mongoose.model('Course', answersSchema)