const express = require('express');
const router = express.Router();
const pokemonsController = require('../controllers/pokemonsController');

//consultas node-fetch
router.get('/', pokemonsController.List);
router.get('/details', pokemonsController.Details);

module.exports = router;