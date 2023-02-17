const User = require('../models/usersModel')
import mongoose from 'mongoose'

// GET all users - admin or speakers
// router.get('/', getUsers)

// GEt a single User
// router.get('/:id', getUser)

// POST a new User
// router.post('/', createUser)
app.post("/createUser", (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        phone: req.body.phone,
        avescore: req.body.avescore
    })
    newUser.save()
        .then(newUser => {
            console.log(newUser)
            res.json(newUser)
        })
        .catch(err => console.log(err))
})


// UPDATE User
// router.delete('/:id', updateUser)

// DELETE a User
// router.patch('/:id', deleteUser)

module.exports = {
    createUser
}

