const express= require('express')
const userRouter = express.Router()
const User = require('../models/user')


userRouter.post('/signin', (req, res) => {
    User.findOne({username: req.body.username}, (err, foundUser) => {
        if (err) {
            res.status(500)
            throw new Error(err)
        }
        if(foundUser) {
            return res.status(200).send(foundUser)
        }
        const newUser = new User(req.body)
        newUser.save((err, user) => {
            if (err) {
                res.status(500)
                throw new Error(err)
            }
            return res.status(201).send(user)
        })
    })
})


// userRouter.post('/login', (req, res) => {
//     User.findOne({username: req.body.username}, (err, foundUser) => {
//         if (err) {
//             res.status(500)
//             throw new Error(err)
//         }
//         if(!foundUser) {
//             res.status(400)
//             throw new Error("Username doesn't exist")
//         }
//         return res.status(200).send(foundUser)
//     })
// })

userRouter.put("/socket/:id", (req, res) => {
    User.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true},
        (err, updatedUser) => {
            if (err) {
                res.status(500)
                throw new Error(err)
            }
            return res.status(201).send(updatedUser)
        })
})


module.exports = userRouter