
/*
Description:            Routes for all the APIs related to the Users (admins and speakers)
Author:                 Dario Ospina
*/
import express from 'express'
import Users from '../models/usersModel.js'
import {createUser, authenticateUser, getUsers, getUserByID, getUserByEmail, deleteUserByID, updateOneUser} from '../controllers/usersController.js'

const router = express.Router();

// AUTHENTICATE a User
router.post('/authentication', authenticateUser)

// GET ALL Users - admin or speakers
router.get('/getAllUsers', getUsers)

// GET a single User By ID
router.get('/getUserByID/:userId', getUserByID)

// GET a single User By Email
router.get('/getUserByEmail/:email', getUserByEmail)

// POST a new User
router.post('/createUser', createUser)

// UPDATE User
router.patch('/updateOneUser/:userId', updateOneUser)

// DELETE a User
router.delete('/deleteUserByID/:userId', deleteUserByID)

export default router;