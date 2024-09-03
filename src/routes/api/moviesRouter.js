const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');

router.get('/', moviesController.list);
router.get('/:id', moviesController.show);
router.post('/', moviesController.store);
router.delete('/:id', moviesController.delete);
module.exports = router;