const User = require('../models/user.js')
const jwtSecret = process.env.SECRET
const jwt = require('jsonwebtoken')
const passport = require('passport')

module.exports = app => {
  app.post("/login", (req, res, next) => {
    passport.authenticate("login", (err, user, info) => {
      if(err){
        return next(err)
      }
      if (info !== undefined){ // Error Handler, info will be any of the error messages passed from "login" strategy
        console.log(info.message)
        return next(new Error(info.message))
      } else {
        req.logIn(user, err => {
          // no need to serialize so no need for this error, we just use req.login to get the user object
          const token = jwt.sign(user.withoutPassword(), jwtSecret)
          res.status(200).send({ token, user: user.withoutPassword() })
        })
      }
    })(req, res, next)
  })
}