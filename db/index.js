const schema = require('./schema.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/item_list_db', {useNewUrlParser: true});

const db = mongoose.connection; 

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database')
});

const itemSchema = new mongoose.Schema(schema);

const Item = mongoose.model('Item', itemSchema);


const find = (query, callback) => {
  Item.findById(query)
    .then((data) => {
      callback(null, data)
    })
}

const findAll = (callback) => {
  Item.find({})
    .then((data) => {
      const items = data.map((item) => (
        item.toObject()
      ))
      callback(null, items)
    })
}

const save = (product, callback) => {
  const items = [];

  product.forEach((element) => {
    var item = new Item()
    var newItem = Object.assign(item, element);
    items.push(newItem)
  })
  Item.insertMany(items, (err, docs) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, docs)
    }
  })
};

const drop = () => {
  Item.collection.drop();
}

module.exports.find = find
module.exports.findAll = findAll
module.exports.drop = drop
module.exports.save = save




