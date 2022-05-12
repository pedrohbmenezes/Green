 const express = require('express');
const model = require('../database/models');
const User = require('../database/models/user');
 const router = express.Router();

 /* GET home page. */
router.get('/', (req, res, next) => {
  const users = model.Users.findAll().then(response => {
     console.log(users)
   })
   
 });

 module.exports = router;