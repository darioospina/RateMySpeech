/*
Module Name:            Create a schema for users
Module Description:     This will make the data model for users
Author:                 Jeff Martin Abayon, Student ID: 424191
*/
import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      //pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
      required: true
    },
    password: {
      type: String,
      required: true
    },
    // roles: {
    //   type: String,
    //   required: true
    //   // type: array,
    //   // items: { type: "string" },
    //   // default: []
    // },
    phone: {
      type: String,
      required: false
    }
    // avescore: {
    //   type: Number,
    //   default: 0.00
    // }
  })

export default mongoose.model('Users', usersSchema);