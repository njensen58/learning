const express = require('express')
const app = express()
const PORT = process.env.port || 6500
const socket = require('socket.io')
const morgan = require('morgan')
const mongoose = require('mongoose')


// Middleware
app.use(morgan('dev'))
app.use(express.json())


// Routes
app.use('/user', require('./routes/user'))
app.use('/round', require('./routes/round'))


// DB
mongoose.connect('mongodb://localhost:27017/socket-test', {useNewUrlParser: true}, () => {
    console.log(`[o] Connect to the DB`)
})


// Error Handling
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})


// Server
const server = app.listen(PORT, () => {
    console.log(`[+] Server is running on Port ${PORT}`)
})


// Socket
const io = socket(server)

io.on("connection", socket => {
    console.log("Made socket connection")
    console.log(socket.id)
    socket.on("chat", data => {
        // Refers to all sockets connected to the server
        // Sends the received data to all connected clients

        io.sockets.emit("chat", data)
    })
    socket.on("typing", data => {
        // Broadcasting message typing
        socket.broadcast.emit("typing", data)
    })

    socket.on("game", data => {
        console.log(data)
    })

    // socket.on("disconnect", socket => {
    //     console.log(socket)
    // })
})

module.exports = { io }