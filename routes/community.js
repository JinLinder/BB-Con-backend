var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
const community=require('../models/community')

//get all posts
router.get('/', (req, res, next)=>{
    community.find({})
    .then(data=>{console.log(data);
        res.json(data)
    });
        
})

//post new post
router.post('/add', (req, res, next)=>{
    const saveCommunity = new community({
        postId:req.body.postId,
        author:req.body.author,
        title:req.body.title,
        text:req.body.text
    })
    saveCommunity.save()
})

//get my posts

//get single post

module.exports = router;