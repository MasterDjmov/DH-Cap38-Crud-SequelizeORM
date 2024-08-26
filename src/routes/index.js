var express = require('express');
var router = express.Router();
var fileupload = require('../middleware/fileUpload');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Digital Movies' });
});
router.get('/subir', function(req, res, next) {
  res.render('subir', { title: 'Digital Movies' });
});

router.post('/subir', fileupload.single('imagen'), function(req, res, next) {
  res.render('subir', { title: 'Digital Movies' });
});
module.exports = router;
