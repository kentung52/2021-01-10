var express = require('express');
var router = express.Router();

router.get('/shop_90', (req, res) => {
  res.render('shop_90', { title: 'Shop Summary' });
});

module.exports = router;
