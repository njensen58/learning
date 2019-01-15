const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    section: {
        type: Schema.Types.ObjectId,
        ref: "Section"
    }
})


module.exports = mongoose.model("Question", questionSchema)