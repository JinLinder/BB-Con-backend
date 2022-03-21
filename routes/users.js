var express = require('express');
var router = express.Router();
const user = require('../models/user')

/* GET users listing. */
router.get('/', (req, res, next)=> {
  user.find({})
  .then(items=>res.json(items))
  .catch(err=>console.log(err))

})



module.exports = router;
