var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
const activity = require('../models/activity')

// get all activities
router.get('/', (req, res, next) => {
    activity.find({})
    .then(data=>{console.log(data);
        res.json(data)
    })
})

// post new activities
router.post('/add', (req, res, next) => {
    const saveActivity = new activity({
        username:req.body.username,
        actId:req.body.actId,
        title:req.body.title,
        community:req.body.community,
        adress:req.body.adress,
        time:req.body.time,
        info:req.body.info,
        participants:req.body.participants
    })
    saveActivity.save()
})

// get my activities
router.get('/myAct', (req, res, next)=>{
    
})

// get single activities
router.get('/item/:actId', (req, res, next)=>{
    activity.find({actId: req.params.actId})
    .then(data=>{console.log(data); res.json(data)})
})

module.exports = router