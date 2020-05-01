const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = 3000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => res.send('Hello World!'));
