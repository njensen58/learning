const passport = require('passport')

module.exports = app => {
  app.get("/findUser", (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if(err){
        console.log(err)
        return next(err)
      }
      if(info !== undefined){ // Error handler
        console.log(info.message)
        return next(new Error(info.message))
      }
      if(!user){
        res.status(500)
        return next(new Error("No User Found"))
      } else {
        console.log("user found in db from route")
        res.status(200).send({ user: user.withoutPassword })
      }
    })(req, res, next)
  })
}

