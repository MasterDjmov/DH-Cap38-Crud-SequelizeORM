var express = require('express');
var router = express.Router();
var fileupload = require('../middleware/fileUpload');

// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Digital Movies' });
});

// GET subir page.
router.get('/subir', function(req, res, next) {
  res.render('subir', { title: 'Digital Movies' });
});

// POST subir page.
router.post('/subir', fileupload.single('imagen'), function(req, res, next) {
  // Verificar si hubo un error durante la subida del archivo
  if (!req.file) {
    return res.status(400).send("Error: No se subió ningún archivo.");
  }
  
  // Si llegamos aquí, la subida fue exitosa
  res.render('subir', { title: 'Digital Movies', mensaje: 'Archivo subido con éxito' });
});

module.exports = router;
