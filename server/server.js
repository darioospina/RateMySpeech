import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

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

app.post("/authentication", (req, res) => {
        const email = req.body.Email
        const password = req.body.Password
    
        Students.find({email: email, password: password})
            .then((result) => {
                console.log(result)
                res.send(result)
            })
            .catch((err) => 
                console.log(err))
    })