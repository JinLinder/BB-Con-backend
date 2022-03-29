var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
const community=require('../models/community')

//get all posts
router.get('/', (req, res, next)=>{
    activity.find({})
    .then(data=>{console.log(data);});
        res.json(data)
})

//post new post
router.post('/add', (req, res, next)=>{
    const savecommunity = new community({
        author:req.body.author,
        title:req.body.title,
        text:req.body.text
    })
    savecommunity.save()
})

//get my posts

//get single post
