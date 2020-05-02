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



const save = (data, callback) => {
  const items = []

  data.forEach(element => {
    item = Object.assign(item, element);
    items.push(item)
  });
};

const drop = () => {
  Item.collection.drop();
}

module.exports.find = find
module.exports.drop = drop
module.exports.save = save
module.exports = Item

///commment


