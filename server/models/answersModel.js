/*
Module Name:            Create a schema for audiences' answers to evaluation questions
Module Description:     This will make the data model for audiences' answers to evaluation questions together with their comments/suggestions
Author:                 Dario Ospina / Jeff Martin Abayon 
*/

import mongoose from 'mongoose' 
const Schema = mongoose.Schema

const answersSchema = new Schema({
	attendeeName: {
		type: String,
		required: true
	},
	attendeeEmail: {
		type: String
	},
	attendeePhone: {
		type: String
	},
	answerOne: {
		type: Number,
		required: true
	},
	answerTwo: {
		type: Number
	},
	answerThree: {
		type: Number
	},
	answerFour: {
		type: Number
	},
	answerFive: {
		type: Number
	},
	answerSix: {
		type: Number
	},
	answerSeven: {
		type: Number
	},
	answerEight: {
		type: Number
	},
	answerNine: {
		type: Number
	},
	answerTen: {
		type: Number
	},
	comments: {
		type: String
	},
	questionsId: {
		type: Schema.Types.ObjectId,
		ref: 'Questions',
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

export default mongoose.model('Answers', answersSchema)