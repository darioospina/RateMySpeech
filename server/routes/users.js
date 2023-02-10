/*
Module Name:            Create routes for users
Module Description:     This will make the routes for API for users
Author:                 Jeff Martin Abayon, Student ID: 424191
Input:                  None
Output:                 None
Date Started:           Feb 9, 2023
Date Last Updated:      Feb 10, 2023
*/

const express = require('express')

const User = require('../models/usersModel')

const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/usersController')

// PENDING - authorization
// const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// PENDING - require auth for all course routes
// router.use(requireAuth)

// GET all users - admin or speakers
router.get('/', getUsers)

// GEt a single User
router.get('/:id', getUser)

// POST a new User
router.post('/', createUser)

// UPDATE User
router.delete('/:id', updateUser)

// DELETE a User
router.patch('/:id', deleteUser)


module.exports = router