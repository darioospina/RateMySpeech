import express from 'express'
import mongoose from 'mongoose'
import bodyParser from "body-parser"
import cors from 'cors'

// Import Schemas
import Answers from './Schemas/Answers.js'
import Atendees from './Schemas/Atendees.js'
import Events from './Schemas/Events.js'
import Questions from './Schemas/Questions.js'
import Users from './Schemas/Users.js'
import dotenv from 'dotenv'

dotenv.config();

// Express app
const app = express();

const PORT = process.env.PORT;

// Initial setup
app.use(cors({
    origin: '*'  
}));
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})

// Connection to MongoDB
const MONGO_URI=process.env.MONGO_URI

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Database Connected")
    })
    .catch((error) => {
        console.log(error)
    })

// Create New User



// User Authentication
app.post("/api/authentication", (req, res) => {
    const email = req.body.Email
    const password = req.body.Password

    Users.find({email: email, password: password})
        .then((result) => {
            console.log(result)
            res.send(result)
        })
        .catch((err) => 
            console.log(err))
})
