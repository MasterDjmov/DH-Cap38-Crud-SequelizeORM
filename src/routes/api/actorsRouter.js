const express = require('express');
const router = express.Router();
const actorsController = require('../../controllers/api/actorsController');

router.get('/', actorsController.list);
router.get('/:id', actorsController.show);
router.post('/', actorsController.store);
router.delete('/:id', actorsController.delete);
module.exports = router;