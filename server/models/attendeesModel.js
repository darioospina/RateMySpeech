/*
Module Name:            Create a schema for audiences or attendees in a speaking engagement
Module Description:     This will make the data model for audiences or attendees in a speaking engagement
Author:                 Jeff Martin Abayon, Student ID: 424191
Input:                  None
Output:                 None
Date Started:           Feb 9, 2023
Date Last Updated:      Feb 10, 2023
*/


const mongoose = require('mongoose')

const Schema = mongoose.Schema

const attendeesSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String
	},
	phone: {
		type: String
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

module.exports = mongoose.model('Course', attendeesSchema)