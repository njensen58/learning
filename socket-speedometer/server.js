const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const PORT = process.env.PORT || 7000

//Setting up express and adding socketIo middleware
const app = express()
const server = http.createServer(app)
const io = socketIo(server)

io.on("connection", (socket) => {
    console.log("A new client connected")

    //Here we listen on a new namespace called "incoming data"
    socket.on("incoming data", (data) => {
        //Here we broadcast it out to all other sockets EXCLUDING the socket which sent us the data
        socket.broadcast.emit("outgoing data", {num: data})
    })

    //A special namespace "disconnect" for when a client disconnects
    socket.on("disconnect", () => console.log("Client disconnected"));
})

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))