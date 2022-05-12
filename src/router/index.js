 const express = require('express');
const model = require('../database/models');
const User = require('../database/models/user');
 const router = express.Router();

 /* GET home page. */
router.get('/', (req, res, next) => {
   res.send(200)
 });

 module.exports = router;