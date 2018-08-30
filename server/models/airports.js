
const mongoose = require('mongoose');
var Schema = mongoose.Schema; //Define collection for schema and items

var Airports = new Schema({
    name: {type: String},
    code: {type: String},
}, {collection: 'airports'});

module.exports = mongoose.model('Airports',Airports);