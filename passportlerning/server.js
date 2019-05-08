const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const passport = require('passport')
const Cors = require('cors')
const PORT = process.env.PORT || 7000


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(Cors())
app.use(morgan('dev'))
app.use(passport.initialize())
require('./config/passport.js')


require('./routes/registerUser')(app)
require('./routes/loginUser')(app)
require('./routes/findUser.js')(app)


mongoose.connect(
  "mongodb://localhost:27017/passport-lernin",
  {
    useNewUrlParser:   true,
    useFindAndModify:  false,
    useCreateIndex:    true
  },
  () => console.log("Connected to the DB")
)


app.use((err, req, res, next) => {
  console.error(err)
  return res.status(500).send({errMsg: err.message})
})


app.listen(PORT, () => console.log(`server is running on port ${PORT}`))

module.exports = app