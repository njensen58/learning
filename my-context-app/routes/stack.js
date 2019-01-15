const express = require('express')
const stackRouter = express.Router()
const Stack = require('../models/stack')
const Section = require('../models/section')
const Question = require('../models/question')

stackRouter.route('/')
    .get((req, res) => {
        Stack.find((err, allStacks) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(allStacks)
        })
    })
    .post((req, res) => {
        const newStack = new Stack(req.body)
        newStack.user = req.user._id
        newStack.save((err, newStack) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(newStack)
        })
    })


stackRouter.route('/:stackId')
    .put((req, res) => {
        Stack.findOneAndUpdate(
            {_id: req.params.stackId, user: req.user._id}, 
            req.body,
            { new: true },
            (err, updatedStack) => {
                if (err) return res.status(500).send(err)
                return res.status(201).send(updatedStack)
        })
    })
    .delete((req, res, next) => {
        Stack.findOneAndRemove({_id: req.params.stackId, user: req.user._id})
            .then(() => {
                return Section.deleteMany({ stack: req.params.stackId })
            })
            .then(() => {
                return res.status(201).send()
            })
            .catch(err => {
                next(err)
            })
        })
    

stackRouter.route('/userstacks/:userId')
    .get((req, res) => {
        Stack.find({user: req.params.userId}, (err, userStacks) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(userStacks)
        })
    })


module.exports = stackRouter
