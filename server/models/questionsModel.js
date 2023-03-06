/*
Module Name:            Create a schema for questions for events 
Module Description:     This will make the data model for questions given by the speaker
Author:                 Dario Ospina / Jeff Martin Abayon 
*/
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const questionsSchema = new Schema({
	questionOne: {
		type: String,
		required: true
	},
	questionTwo: {
		type: String
	},
	questionThree: {
		type: String
	},
	questionFour: {
		type: String
	},
	questionFive: {
		type: String
	},
	questionSix: {
		type: String
	},
	questionSeven: {
		type: String
	},
	questionEight: {
		type: String
	},
	questionNine: {
		type: String
	},
	questionTen: {
		type: String
	},
	eventId: {
		type: Schema.Types.ObjectId,
		ref: 'Events',
		required: true
	},
	createdAt: {
	   type: Date,
	   default: Date.now
   }
})

export default mongoose.model('Questions', questionsSchema);