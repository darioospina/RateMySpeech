/*
Module Name:            Create a schema for users
Module Description:     This will make the data model for users
Author:                 Jeff Martin Abayon, Student ID: 424191
Input:                  None
Output:                 None
Date Started:           Feb 9, 2023
Date Last Updated:      Feb 10, 2023
*/


const mongoose = require('mongoose')

const Schema = mongoose.Schema

const usersSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
      required: true
    },
    password: {
      type: String,
      required: true
    },
    roles: {
      type: array,
      items: { type: "string" },
      default: []
    },
    phone: {
      type: String,
      required: false
    },
    avescore: {
      type: number,
      default: 0.00
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

  module.exports = mongoose.model('Course', usersSchema)