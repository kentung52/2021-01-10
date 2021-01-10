const db = require('../utils/database');

const Cart_90 = class Cart_90 {
  constructor(id, uid, cid, amount) {
    this.id = id;
    this.uid = uid;
    this.cid = cid;
    this.amount = amount;
  }

  // CREATE
  static create(req, res) {
    return db.execute(
      'INSERT INTO cart_xx (id, uid, cid, amount) VALUES (?, ?, ?, ?)',
      [
        req.body.id,
        req.body.uid,
        req.body.cid,
        req.body.amount,
      ]
    );
  }

  // READ
  static fetchAll() {
    return db.execute('select * from cart_90');
  }

  static fetchCartInfoByUserId(uid) {
    return db.execute(
      'SELECT US.name as userName, CL.name as productName, CT.amount, CL.price, CL.local_url as localUrl FROM cart_xx as CT, user_xx as US, clothing_xx as CL WHERE CT.uid = US.id and CT.cid = CL.id and US.id = ?',
      [uid]
    );
  }

    // DELETE
    static deleteById(id) {
      return db.execute('DELETE FROM cart_xx WHERE id = ?', [id]);
    }

};

// test
const test = async (req, res) => {
  try {
    await Cart_90.fetchCartInfoByUserId(6).then(([rows]) => {
      console.log('fetchCartInfoByUserId', JSON.stringify(rows));
      //   res.json(rows);
    });
  } catch (err) {
    console.log(err);
  }
};

// test();

module.exports = Cart_90;
