'use strict';
const MB = 1024 * 1024;
let express = require('express');
var app = express();
app.get('/', (req, res) => {
    res.send('WELCOME TO NODEJS')
})
app.get('/about', (req, res) => {
    res.send('about us page');
})
app.listen(4000, () => {
    console.log("working")
})
