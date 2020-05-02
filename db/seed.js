const db = require('./index.js');
const items = require('./helper.js');

db.save(items.dataGenerator(), (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Succefully saved to database')
  }
})