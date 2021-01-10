const db = require('../utils/database');

const Category_90 = class Category_90 {
  constructor(cid, name, size, remote_url, local_url, link_url) {
    this.id = id;
    this.name = title;
    this.size = size;
    this.remote_url = remote_url;
    this.local_url = local_url;
    this.link_url = link_url;
  }

  // READ
  static fetchAll() {
    return db.execute('select * from category_xx');
  }
};

// test
const testFetchAll = async (req, res) => {
  try {
    await Category_90.fetchAll().then(([rows]) => {
      console.log('testFetchAll', JSON.stringify(rows));
    });
  } catch (err) {
    console.log(err);
  }
};

// tesFetchAll();

module.exports = Category_90;
