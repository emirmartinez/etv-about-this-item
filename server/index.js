const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const db = require('../db/index.js')

const port = 3000;
app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/product/id', (req, res) => {
  db.find(req.params.id, (err, data) => {
    if (err) {
      res.status(500)
    } else {
      res.status(200)
    }
  })
})

app.post('/', (req, res) => {
  db.save(req.body, (err) => {
    if (err) {
      res.status(500)
    } else {
      res.status(200)
    }
  })
})
