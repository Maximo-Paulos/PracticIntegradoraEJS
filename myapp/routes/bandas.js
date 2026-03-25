var express = require('express');
var router = express.Router();

const bandasController = require('../controllers/bandasController');

router.get('/', bandasController.listadoBandas);

router.get('/genero/:genero', bandasController.porGenero);

router.get('/:id', bandasController.detalleBanda);

module.exports = router;