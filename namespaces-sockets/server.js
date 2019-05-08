const express = require('express')
const app = express()
const PORT = process.env.PORT || 7000
const http = require('http').createServer()

const io = require("socket.io")(http)

// io.on("connection", socket => {
//     socket.emit("welcome", "Hello and Welcome to the Socket.io Server")

//     console.log("New Client is Connected")
// })

// must use connection listener that gives you the socket
io.of("/games").on("connection", socket => {

    socket.emit("welcome", "Hello and welcome to the games channel")
    // each name space can create rooms for that name space
    socket.on("joinRoom", room => {

    })
})

http.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})