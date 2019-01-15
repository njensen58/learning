const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')


userRouter.get('/', (req, res) => {
    User.findOne({_id: req.user._id}, (err, user) => {
        if (err) { 
            res.status(500)
            throw new Error(err)
        }
        if (user === null){ 
            res.status(400)
            throw new Error("User not found!")
        }
        return res.status(200).send({user: user.withoutPassword()})
    })
})

module.exports = userRouter