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

module.exports = Item

