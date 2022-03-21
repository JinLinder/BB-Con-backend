var express = require('express');
var router = express.Router();
//const user = require('../models/user')
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// get all users

// router.get('/', (req, res, next)=> {
//   user.find({})
//   .then(items=>res.json(items))
//   .catch(err=>console.log(err))

// })

// router.post('add/', (req, res, next)=>{
//   const {userName,passWord, babyAge, location} = new user({
//     userName,
//       passWord,
//       babyAge,
//       location
// })
// saveUser.save()
// })

// router.get('/', async(res, req, next)=>{
//   try{
//     const users = await user.find({});
//     res.send(users)
//   } catch (error) {
//     console.error(err.message);
//     res.statusCode(500).send('Server Error')
//   }
// })
module.exports = router;
