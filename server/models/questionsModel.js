/*
Module Name:            Create a schema for questions for events 
Module Description:     This will make the data model for questions given by the speaker
Author:                 Jeff Martin Abayon
*/


const mongoose = require('mongoose')

const Schema = mongoose.Schema

const questionsSchema = new Schema({
	eventId: {
		type: ObjectId,
		required: true
	},
	questionOne: {
		type: String,
		required: true
	},
	questionTwo: {
		type: String,
		required: true
	},
	questionThree: {
		type: String,
		required: true
	},
	questionFour: {
		type: String,
		required: true
	},
	questionFive: {
		type: String,
		required: true
	},
	questionSix: {
		type: String,
		required: true
	},
	questionSeven: {
		type: String,
		required: true
	},
	questionEight: {
		type: String,
		required: true
	},
	questionNine: {
		type: String,
		required: true
	},
	questionTen: {
		type: String,
		required: true
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

module.exports = mongoose.model('Course', questionsSchema)