/*
Module Name:            Create a schema for events (Speaking engagements)
Module Description:     This will make the data model for events
Author:                 Jeff Martin Abayon
*/


const mongoose = require('mongoose')

const Schema = mongoose.Schema

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
		type: String,
		required: true
	},
	speakerId: {
		type: ObjectId,
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


module.exports = mongoose.model('Course', eventsSchema)