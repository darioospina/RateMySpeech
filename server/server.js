/*
Author:                 Dario Ospina
Description:            Configuration of the server, connection to the database and list of all the APIs
*/
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from "body-parser"
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

// Import User Routes
import usersRoutes from './routes/users.js'
// import questionsRoutes from './routes/questions.js'
import eventsRoutes from './routes/events.js'
// import commentsRoutes from './routes/comments.js'
// import attendeesRoutes from './routes/attendees.js'
// import answersRoutes from './routes/answers.js'
    
// Express app
const app = express();

//const PORT = process.env.PORT;
const PORT = 4000;

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
.catch((err) => {
    console.log(err)
})


// Call to all the APIs
app.use('/usersRoutes', usersRoutes);
// app.use('/questionsRoutes', questionsRoutes);
app.use('/eventsRoutes', eventsRoutes);
// app.use('/commentsRoutes', commentsRoutes);
// app.use('/attendeesRoutes', attendeesRoutes);
// app.use('/answersRoutes', answersRoutes);
