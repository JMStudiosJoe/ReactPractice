


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const indexPath = path.join(__dirname, 'index.html');
const publicPath = express.static(path.join(__dirname, '/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors()); what does it do?
app.use('/', publicPath);

app.get('/*', function (_, res) {
    console.log("ahhhhhh its working");
    res.sendFile(indexPath)
});

app.listen(4000);
console.log("listening at port 4000");
