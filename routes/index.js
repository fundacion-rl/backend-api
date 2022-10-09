var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API Fundación Retorno a la Libertad' });
});

module.exports = router;
