const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const socket = require('socket.io')
const PORT = process.env.port || 7000

// Middleware
app.use(morgan('dev'))
app.use(express.json())



// Routes
app.use('/api', expressJwt({secret: process.env.SECRET}))
app.use('/api/user', require('./routes/user'))
app.use('/auth', require('./routes/auth'))


mongoose.connect('mongodb://localhost:27017/go-fish', {useNewUrlParser: true}, () => {
    console.log(`[+]Connected to the db`)
})



// Global error handling
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})

// Server
const server = app.listen(PORT, () => {
    console.log(`[+]Server is running on port ${PORT}`)
})


const io = socket(server)

io.on("connection", socket => {
    socket.on("chat", data => {
        
    })
})