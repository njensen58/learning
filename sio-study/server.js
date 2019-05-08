const express = require('express')
const app = express()
const path = require('path')
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

io.on('connection', (socket) => {
    io.emit("connected user", "A user has connected")
    // socket.on("disconnect", () => {
    //     console.log('user disconnected')
    // })
    // socket.on('chat message', (msg) => {
    //     console.log("message: " + msg)
    // })
    // socket.broadcast.emit('hi')
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })
})


http.listen(3000, () => {
    console.log("Server running on :3ooo")
})




