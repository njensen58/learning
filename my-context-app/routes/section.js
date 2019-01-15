const express = require('express')
const sectionRouter = express.Router()
const Section = require('../models/section')
const Question = require('../models/question')

sectionRouter.route('/')
    .get((req, res) => {
        Section.find((err, allSections) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(allSections)
        })
    })
    .post((req, res) => {
        const newSection = new Section(req.body)
        newSection.save((err, newSection) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(newSection)
        })
    })

// Get all sections for a specific Stack
sectionRouter.route('/:stackId')
    .get((req, res) => {
        Section.find( { stack: req.params.stackId}, (err, sections) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(sections)
        })
    })

// Update and delete a specific stack
sectionRouter.route('/update/:sectionId')
    .put((req, res) => {
        Section.findOneAndUpdate(
            {_id: req.params.sectionId},
            req.body, 
            { new: true },
            (err, updatedSection) => {
                if (err) return res.status(500).send(err)
                return res.status(201).send(updatedSection)
        })
    })
    
// When a section is deleted, go find the questions attached to it and delete them as well.
sectionRouter.route('/:sectionId')
    .delete((req, res, next) => {
        Section.findOneAndRemove({_id: req.params.sectionId})
            .then(() => {
                return Question.deleteMany({ section: req.params.sectionId })  
            })
            .then(() => { 
                return res.status(204).send()
            })
            .catch(err => {
                next(err)
            })
    })


module.exports = sectionRouter