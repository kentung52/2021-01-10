const Clothing = require('../models/clothingModel_90');
const Category = require('../models/categoryModel_90');
const Cart = require('../models/cartModel_90');

// CREATE
exports.createProduct = async (req, res) => {
  console.log('createProduct', req.body);
  try {
    await Clothing.create(req, res).then(([rows]) => {
      res.redirect('/crown2_90');
    });
    // res.json(req.body);
  } catch (err) {
    console.log(err);
  }
};


// CREATE
exports.createCart = async (req, res) => {
  console.log('createCart', req.body);
  try {
    await Cart.create(req, res).then(([rows]) => {
      res.redirect('/crown2_90/cart2_90');
    });
    // res.json(req.body);
  } catch (err) {
    console.log(err);
  }
};

// READ
exports.getHomepage = async (req, res) => {
  let data = {};
  try {
    await Category.fetchAll().then(([rows]) => {
      console.log('getDashboard', JSON.stringify(rows));
      data.category = rows;
      // res.json(rows);
    });

    res.render('crown2_90', { title: 'Homepage', data: data.category });
  } catch (err) {
    console.log(err);
  }
};

exports.getCartInfo = async (req, res) => {
  let data = {};
  data.uid = 6;
  try {
    await Category.fetchAll().then(([rows]) => {
      console.log('getDashboard', JSON.stringify(rows));
      data.category = rows;
      // res.json(rows);
    });

    await Cart.fetchCartInfoByUserId(data.uid).then(([rows]) => {
      console.log('fetchCartInfoByUserId', JSON.stringify(rows[0]));
      data.cartInfo = rows;
      data.total = 0;
      data.username = rows[0].userName;
      data.cartInfo.forEach((p) => {
        data.total += p.amount * p.price;
      });
      // res.json(data);
    });

    res.render('homepageCart_90', {
      title: 'Homepage with Cart Info',
      username: data.username,
      catData: data.category,
      cartData: data.cartInfo,
      total: data.total,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getProductsByCategory = async (req, res) => {
  let data = {};
  data.cid = 0;
  console.log('req.params.product', req.params.product);
  try {
    if (req.params.product === 'hats') data.cid = 1;
    else if (req.params.product === 'jackets') data.cid = 2;
    else if (req.params.product === 'sneakers') data.cid = 3;
    else if (req.params.product === 'womens') data.cid = 4;
    else if (req.params.product === 'mens') data.cid = 5;
    await Clothing.fetchProductsByCategory(data.cid).then(([rows]) => {
      data.products = rows;
      // res.json(data);
    });

    res.render('products2_90', {
      title: req.params.product,
      data: data.products,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getShopOverview = async (req, res) => {
  let data = {};
  try {
    await Clothing.fetchProductsByCategory(1).then(([rows]) => {
      data.hats = rows;
    });
    await Clothing.fetchProductsByCategory(2).then(([rows]) => {
      data.jackets = rows;
    });
    await Clothing.fetchProductsByCategory(3).then(([rows]) => {
      data.sneakers = rows;
    });
    await Clothing.fetchProductsByCategory(4).then(([rows]) => {
      data.womens = rows;
    });
    await Clothing.fetchProductsByCategory(5).then(([rows]) => {
      data.mens = rows;
    });
    // res.json(data);
    res.render('shop2_90', { data, count: 6 });
  } catch (err) {
    console.log(err);
  }
};

// UPDATE
exports.updateProduct = async (req, res) => {
  console.log('updateProduct', req.body);
  try {
    await Clothing.updateById(req, res).then(([rows]) => {
      res.redirect('/crown2_90');
    });
  } catch (err) {
    console.log(err);
  }
};

// DELETE
exports.deleteProduct = async (req, res) => {
  console.log('deleteProduct', req.query.id);
  try {
    await Clothing.deleteById(req.query.id).then(([rows]) => {
      res.redirect('/crown2_90');
    });
  } catch (err) {
    console.log(err);
  }
};

exports.delete2Product = async (req, res) => {
  console.log('deleteProduct', req.params.id);
  try {
    await Clothing.deleteById(req.params.id).then(([rows]) => {
      res.redirect('/crown2_90');
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteCartById = async (req, res) => {
  console.log('deleteCartById', req.params.id);
  try {
    await Cart.deleteById(req.params.id).then(([rows]) => {
      res.redirect('/crown2_90/cart2_90');
    });
  } catch (err) {
    console.log(err);
  }
};
