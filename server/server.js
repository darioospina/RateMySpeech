import express from 'express'
import mongoose from 'mongoose'
import bodyParser from "body-parser"
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

// Import Schemas
import Users from './models/usersModel.js'

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
app.post("/api/newUser", (req, res) => {
    const newUser = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        //roles: req.body.roles,
        phone: req.body.phone
    })
    newUser.save()
        .then(user => {
            console.log(user)
            res.json(user)
        })
        .catch(err => console.log(err))
})
