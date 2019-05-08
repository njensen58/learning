const SECRET = process.env.SECRET
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user.js')
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

passport.use(
  "register",
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      session: false
    },
    async (username, password, done) => {
      try{
        const user = await User.findOne({username: username})
        if(user !== null){
          return done(null, false, {message: "Username already taken"})
        } else {
          const newUser = new User({username, password})
          newUser.save((err, savedUser) => {
            if(err){
              done(err)
            }
            return done(null, savedUser)
          })
        }
      }
      catch(err){
        done(err)
      }
    }
  )
)


passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      session: false
    },
    async (username, password, done) => {
      try{
        const user = await User.findOne({username: username})
        if(user === null){
          return done(null, false, {message: "Username or Password are Incorrect"})
        } else {
          user.checkPassword(password, (err, isMatch) => {
            if(err){
              console.log("Username or Password are Incorrect")
              return done(null, false, { message: "Username or Password are Incorrect "})
            }
            if(!isMatch){
              console.log("Username or Password are Incorrect")
              return done(null, false, { message: "Username or Password are Incorrect "})
            }
            console.log("User found and authenticated")
            return done(null, user)
          })
        }
      }
      catch(err){
        done(err)
      }
    }
  )
)


const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET
}

passport.use(
  "jwt",
  new JWTStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({username: jwt_payload.username})
      if(user){
        console.log("User found")
        return done(null, user)
      } else {
        console.log("user not found in DB")
        return done(null, false) // false is sent as the user, sot he route will check for this and throw and error.
      }
    }
    catch(err){
      done(err)
    }
  })
)

