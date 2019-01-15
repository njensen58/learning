const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    socketId: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model("User", userSchema)