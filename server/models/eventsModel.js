/*
Module Name:            Create a schema for events (Speaking engagements)
Module Description:     This will make the data model for events
Author:                 Jeff Martin Abayon / Dario Ospina
*/
import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
	eventname: {
		type: String,
		required: true
	},
	eventdesc: {
		type: String,
		required: true
	},
	eventdate: {
		type: Date,
		required: true
	},
	venue: {
		type: String,
		required: true
	},
	eventcapacity: {
		type: Number,
		required: true
	},
	qrcode: {
		type: String
	},
	speakerId: {
		type: Schema.Types.ObjectId,
		ref: 'Users',
		required: true
	},
	createdAt: {
	   type: Date,
	   default: Date.now
   }
})

export default mongoose.model('Events', eventsSchema)