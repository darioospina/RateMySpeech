/*
Module Name:            Create a schema for events (Speaking engagements)
Module Description:     This will make the data model for events
Author:                 Jeff Martin Abayon, Student ID: 424191
Input:                  None
Output:                 None
Date Started:           Feb 9, 2023
Date Last Updated:      Feb 9, 2023
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


module.exports = mongoose.model('Course', eventsSchema)