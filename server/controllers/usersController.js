/*
Description:            This file contains the controller for all the APIs related to the User
Author:                 Dario Ospina
*/
import Users from '../models/usersModel.js'
import mongoose from 'mongoose'

// GET All Users - admin or speakers
export const getUsers = (req, res) => {
    Users.find()
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
}

// GET One Single User By ID
export const getUserByID = (req, res) => {
    const userId = req.params.userId

    Users.find({"_id": mongoose.Types.ObjectId(userId)})
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
}

// GET One Single User By Email
export const getUserByEmail = (req, res) => {
    const Email = req.params.email

    Users.find({email: Email})
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => 
        console.log(err))
}

// POST A New User to the Database
export const createUser = (req, res) => {
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
}

// AUTHENTICATE A User When Login In
export const authenticateUser = (req, res) => {
    const email = req.body.email
    const password = req.body.password

    Users.find({email: email, password: password})
    .then((result) => {
        console.log(result)
        res.send(result)
    })
    .catch((err) => console.log(err))
}

// UPDATE User
// router.delete('/:id', updateUser)

// DELETE a User By ID
export const deleteUserByID = (req, res) => {
    const userId = req.params.userId

    Users.deleteOne({"_id": mongoose.Types.ObjectId(userId)})
    .then((result) => {
        console.log(result)
        res.send(`User with ID ${userId} successfully deleted`)
    })
    .catch((err) => console.log(err))
}





