const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

mongoose.connect('');

app.listen(4000, function(){

     console.log('server is ready');
})


    
