const express = require('express');
const products = require('./route');
const config = require('./config/db');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const DB =  'mongodb://localhost:27017/flightEngine';
mongoose.connect(config.DB, {useNewUrlParser: true})
         .then(
             () => {console.log('Database is connected')},
             err => {console.log('Error connecting to database',err)}
         )
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(function(req,res,next){
    console.log('Current Time: ', Date.now());
    next();
})

