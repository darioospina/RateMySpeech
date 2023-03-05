/*
Module Name:            Create a schema for questions for events 
Module Description:     This will make the data model for questions given by the speaker
Author:                 Dario Ospina / Jeff Martin Abayon 
*/
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const questionsSchema = new Schema({
	eventId: {
		type: Schema.Types.ObjectId,
		ref: 'Events',
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
	   default: Date.now
   }
})

export default mongoose.model('Questions', questionsSchema);