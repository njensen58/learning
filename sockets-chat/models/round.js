const mongoose = require('mongoose')
const { Schema } = mongoose

const roundSchema = new Schema({
    player1: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    player2: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model("Round", roundSchema)