var express = require('express');
var router = express.Router();
const user = require('../models/user')

router.post('/', function(req, res, next){
    
    user.find({username:req.body.username})
    .then(data => {
        if (data.length <= 1) {
          console.log('user not found');
          res.status(422).json({ message: `Användare inte hittad` });
        }
      })  
    .catch((err)=> {
        console.log(err);
    });

    user.find({username:req.body.username, password:req.body.password})
    .then(data=>{
        if(data.length>=1) {
            console.log('user match username and password');
            res.status(201).json({ message: `Användare: ${req.body.username} inloggad` })
        }
    })
    .catch((err)=> {
        console.log(err);
    });
})

module.exports = router;