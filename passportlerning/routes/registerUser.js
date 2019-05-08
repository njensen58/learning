const User = require('../models/user.js')
const passport = require('passport')
const jwt = require('jsonwebtoken')

module.exports = app => {
  app.post("/register", (req, res, next) => {
    passport.authenticate('register', (err, user, info) => {
      if(err){
        return next(err)
      }
      if(info !== undefined){ // Error Handler
        console.log(info.message)
        return next(new Error(info.message))  // Error
      } else {
        req.logIn(user, async err => {
          const data = {
            username: req.body.username
            // Other updated fields as necessary after initial user creation.
          }
          try{
            const foundUser = await User.findOne({username: data.username})
            const updatedUser = await User.findOneAndUpdate({username: data.username}, data, {new: true})
            console.log("user created in DB")
            const token = jwt.sign(updatedUser.withoutPassword(), process.env.SECRET)
            return res.status(201).send({user: updatedUser.withoutPassword(), token})
          }
          catch(err){
            res.status(500)
            return next(err)
          }
        })
      }
    })(req, res, next)
  })
}