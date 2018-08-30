
const mongoose = require('mongoose');
var Schema = mongoose.Schema; //Define collection for schema and items

var Flights = new Schema({
    id: {type: Number},
    type: {type: String},
    flight_code: {type: String},
    origin: {type: String},
    destination: {type: String},
    fare: {type: Number},
    duration: {type: String},
    departureDate: {type: Date},
    arrivalTime: {type: Date},
    route_one_code: {type: String},
    route_two_code: {type: String},
    route_one_fare: {type: Number},
    route_two_fare: {type: Number},
    route_one_departure: {type: Date},
    route_one_arrival: {type: Date},
    route_two_departure: {type: Date},
    route_two_arrival: {type: Date},
    departureDate: {type: Date},
    returnDate: {type: Date},
    route_one_duration: {type: String},
    route_two_duration:{type: String}
}, {collection: 'flights'});

module.exports = mongoose.model('Flights',Flights);






    