var express = require('express');
var router = express.Router();

const crown2Controller = require('../controllers/crown2Controller_90');

// for ROUTE /crown2_xx

// CREATE
router.post('/create', crown2Controller.createProduct);

// READ
router.get('/', crown2Controller.getHomepage);
router.get('/shop2_90', crown2Controller.getShopOverview);
router.get('/shop2_90/:product', crown2Controller.getProductsByCategory);

// UPDATE
router.post('/update', crown2Controller.updateProduct);

// DELETE
router.get('/delete/:id', crown2Controller.delete2Product);
router.get('/delete', crown2Controller.deleteProduct);


// for Route /crown2_xx/cart2_xx
router.post('/cart2_90/create', crown2Controller.createCart);
router.get('/cart2_90', crown2Controller.getCartInfo);
router.get('/cart2_90/delete/:id', crown2Controller.deleteCartById);

module.exports = router;
