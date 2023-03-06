/*
Description:            This will make the data model for users
Author:                 Dario Ospina / Jeff Martin Abayon 
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
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: false
    }
  })

export default mongoose.model('Users', usersSchema);