var express = require('express');
var router = express.Router();
const activity = require('../models/activity')

router.post('/add', function(req, res, next){
    const saveActivity = new activity({
        title:req.body.title,
        community:req.body.community,
        adress:req.body.adress,
        time:req.body.time,
        info:req.body.info
    })
    saveActivity.save()
})

module.exports = router