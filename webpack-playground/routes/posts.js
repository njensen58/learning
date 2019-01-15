const express = require('express')
const postRouter = express.Router()
const Post = require('../models/posts')


postRouter.get('/', (req, res, next) => {
    Post.find((err, posts) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})


postRouter.post('/', (req, res, next) => {
    const newPost = new Post(req.body)
    newPost.save((err, post) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(post)
    })
})

postRouter.get('/:id', (req, res, next) => {
        Post.findOne({_id: req.params.id}, (err, post) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(post)
        })
    })

postRouter.delete('/:id', (req, res, next) => {
    console.log(req.params.id)
    Post.findOneAndDelete({_id: req.params.id}, (err, deletedPost) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send(deletedPost)
    })
})

postRouter.put('/:id', (req, res, next) => {
    Post.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true },
        (err, post) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(post)
    })
})


module.exports = postRouter