 const express = require('express');
 const db = require('../database/models');
 const servicos = require('../services/services');
 const router = express.Router();

router.get('/:description?/:title?/:typeservicesId?', servicos.find);
 
 router.post('/', servicos.save);

 router.delete('/', servicos.delete);


 module.exports = router;