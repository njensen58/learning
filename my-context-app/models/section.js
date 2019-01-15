const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Question = require('./question')

const sectionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    stack: {
        type: Schema.Types.ObjectId,
        ref: "Stack",
        required: true
    }  
})

sectionSchema.pre("remove", function(next){
    return Question.deleteMany({ section: this._id })     
    })
    .then(() => {
        return res.status(204).send()
    })
    .catch(err => next(err))


module.exports = mongoose.model("Section", sectionSchema)