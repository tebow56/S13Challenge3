const express = require ('express')
const router = express.Router()
const Post = require ("../models/Post.js")


router.post ("/create", async (req, res)=>{
    try {
        const post =await Post.create(req.body)
        res.status(201).send(post)
    } catch (error){
    console.error(error);
    res.status(500).send({ message: "There was a problem creating the post"})
    }
})

router.get ("/", async (req, res)=>{
    try {
        const posts = await Post.find({})
        res.status(200).send(posts)
    } catch (error){
        console.error(error);
        res.status(500).send({ message: "There was a problem retrieving the posts"})
    }
})

router.get ("/id/:id", async (req, res)=>{
    try {
        const id = req.params.id 
        const post = await Post.findById(id)
        res.status(200).send(post)
    } catch (error){
        console.error(error);
        res.status(500).send({ message: "There was a problem retrieving the post"})
    }
})


router.get ("/title/:title", async (req, res)=>{
    try {
        const title = req.params.title
        const post = await Post.findOne({ "title": title })
        res.status(200).send(post) 
    } catch (error){
        console.error(error);
        res.status(500).send({ message: "There was a problem retrieving the post"})
    }
})

router.put ("/update/:id", async (req, res)=>{
    try {
        const id = req.params.id
        const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).send(updatedPost)
    } catch (error){
        console.error(error);   
        res.status(500).send({ message: "There was a problem updating the post"})
    }
})

router.delete ("/delete/:id", async (req, res)=>{
    try {
        const id = req.params.id
        await Post.findByIdAndDelete(id)    
        res.status(200).send({ message: "Post deleted successfully" })
    } catch (error){
        console.error(error);
        res.status(500).send({ message: "There was a problem deleting the post"})
    }   
})

module.exports =router;