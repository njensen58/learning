const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 6000

// Middlewares
app.use(morgan('dev'))
app.use(express.json())


// Routes
app.use('/posts', require('./routes/posts'))

// DB
mongoose.connect('mongodb://localhost:27017/webpack-tester', { useNewUrlParser: true}, () => {
    console.log(`[+] We're connected to the db sir!`)
})

// Global Err handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({err})
})

// Server
app.listen(PORT, () => console.log(`[o] Server is up on Port ${PORT} sir!`))

