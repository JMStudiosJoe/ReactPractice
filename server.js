const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', function(req, res){
    console.log("ahhhhhh its working");

    res.sendFile(__dirname, '/build/index.html');
})

app.listen(4000);
