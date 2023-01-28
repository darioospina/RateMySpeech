import express from 'express'
import mongoose from 'mongoose'

// express app
const app = express();

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listeing to requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })