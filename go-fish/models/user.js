const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowerCase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    memberSince: {
        type: Date,
        default: Date.now
    },
    wins: {
        type: Object,
        default: 0,
        against: [{
            user: Schema.Types.ObjectId,
            type: "User"
        }]
    },
    loses: {
        type: Object,
        default: 0,
        against: [{
            user: Schema.Types.ObjectId,
            type: "User"
        }]
    }
})

userSchema.pre("save", function (next) {
    const user = this
    if (!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) next(err)
        user.password = hash
        next()
    })
})

userSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err)
        callback(null, isMatch)
    })
}

userSchema.methods.withoutPassword = function() {
    const user = this.toObject()
    delete user.password
    return user
}


module.exports = mongoose.model("User", userSchema)