const express = require('express');
var router = express.Router();
const Flights = require('../../models/flights');
const Airports = require('../../models/Airports');

const flights = [
    {
    type: 'one-way',
    id: 1,
    flight_code: 'BD - 192',
    origin: 'Banglore',
    destination: 'Delhi',
    fare: 7400,
    duration: '2h 30m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2.5', 'hours')
  },
  {
    type: 'one-way',
    id: 121,
    flight_code: 'PQ - 272',
    origin: 'Delhi',
    destination: 'Banglore',
    fare: 5500,
    duration: '2h 30m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2.5', 'hours')
  },
  {
    type: 'one-way',
    id: 123,
    flight_code: 'PA - 152',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 5750,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2,
    flight_code: 'AP - 201',
    origin: 'Ahemdabad',
    destination: 'Pune',
    fare: 1100,
    duration: '3h 55m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('4', 'hours')
  },
  {
    type: 'one-way',
    id: 3,
    flight_code: 'PA - 203',
    origin: 'Pune',
    destination: 'Ahemdabad',
    fare: 9000,
    duration: '4h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('4', 'hours')
  },
  {
    type: 'one-way',
    id: 390,
    flight_code: 'EF - 203',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 12000,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 33,
    flight_code: 'BD - 203',
    origin: 'Banglore',
    destination: 'Delhi',
    fare: 13000,
    duration: '2h 40m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2.5', 'hours')
  },
  {
    type: 'one-way',
    id: 37,
    flight_code: 'EF - 203',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 14500,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 300,
    flight_code: 'AR - 204',
    origin: 'Ahemdabad',
    destination: 'Rajasthan',
    fare: 10500,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 12,
    flight_code: 'ER - 901',
    origin: 'Pune',
    destination: 'Rajasthan',
    fare: 13500,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1122,
    flight_code: 'ER - 901',
    origin: 'Pune',
    destination: 'Rajasthan',
    fare: 14500,
    duration: '2h 10m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 142,
    flight_code: 'BA - 901',
    origin: 'Banglore',
    destination: 'Ahemdabad',
    fare: 11500,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 152,
    flight_code: 'ER - 901',
    origin: 'Pune',
    destination: 'Rajasthan',
    fare: 12500,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 20,
    flight_code: 'QW - 284',
    origin: 'Ahemdabad',
    destination: 'Banglore',
    fare: 14000,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 145,
    flight_code: 'RT - 504',
    origin: 'Ahemdabad',
    destination: 'Banglore',
    fare: 16000,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1456,
    flight_code: 'RT - 504',
    origin: 'Banglore',
    destination: 'Ahemdabad',
    fare: 5000,
    duration: '2h 05m',
    departureDate: moment().add('1', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('1', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1457,
    flight_code: 'RT - 504',
    origin: 'Pune',
    destination: 'Rajasthan',
    fare: 5200,
    duration: '2h 05m',
    departureDate: moment().add('1', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('1', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1500,
    flight_code: 'RT - 504',
    origin: 'Pune',
    destination: 'Rajasthan',
    fare: 5200,
    duration: '2h 05m',
    departureDate: moment().add('2', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1501,
    flight_code: 'RT - 504',
    origin: 'Pune',
    destination: 'Rajasthan',
    fare: 5200,
    duration: '2h 05m',
    departureDate: moment().add('3', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('3', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 6000,
    flight_code: 'RE - 204',
    origin: 'Rajasthan',
    destination: 'Pune',
    fare: 10500,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 6001,
    flight_code: 'ER - 901',
    origin: 'Rajasthan',
    destination: 'Pune',
    fare: 13500,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 6002,
    flight_code: 'ER - 901',
    origin: 'Rajasthan',
    destination: 'Pune',
    fare: 14500,
    duration: '2h 10m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 6003,
    flight_code: 'ER - 901',
    origin: 'Rajasthan',
    destination: 'Pune',
    fare: 11500,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 6004,
    flight_code: 'ER - 901',
    origin: 'Rajasthan',
    destination: 'Pune',
    fare: 12500,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 6005,
    flight_code: 'QW - 284',
    origin: 'Rajasthan',
    destination: 'Pune',
    fare: 14000,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 6006,
    flight_code: 'RT - 504',
    origin: 'Rajasthan',
    destination: 'Pune',
    fare: 16000,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 6007,
    flight_code: 'RT - 504',
    origin: 'Rajasthan',
    destination: 'Pune',
    fare: 5000,
    duration: '2h 05m',
    departureDate: moment().add('1', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('1', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 6008,
    flight_code: 'RT - 504',
    origin: 'Rajasthan',
    destination: 'Pune',
    fare: 5200,
    duration: '2h 05m',
    departureDate: moment().add('1', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('1', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 6009,
    flight_code: 'RT - 504',
    origin: 'Rajasthan',
    destination: 'Pune',
    fare: 5200,
    duration: '2h 05m',
    departureDate: moment().add('2', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 6010,
    flight_code: 'RT - 504',
    origin: 'Rajasthan',
    destination: 'Pune',
    fare: 5200,
    duration: '2h 05m',
    departureDate: moment().add('3', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('3', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1000,
    flight_code: 'PD - 670',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 5000,
    duration: '2h 05m',
    departureDate: moment().add('1', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('1', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1001,
    flight_code: 'PD - 109',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 10000,
    duration: '2h 05m',
    departureDate: moment().add('1', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('1', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1002,
    flight_code: 'PD - 560',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 15000,
    duration: '2h 05m',
    departureDate: moment().add('1', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('1', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1003,
    flight_code: 'PD - 212',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 5000,
    duration: '2h 05m',
    departureDate: moment().add('2', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1004,
    flight_code: 'PD - 321',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 7000,
    duration: '2h 05m',
    departureDate: moment().add('2', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1005,
    flight_code: 'PD - 435',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 10000,
    duration: '2h 05m',
    departureDate: moment().add('2', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1006,
    flight_code: 'PD - 126',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 12000,
    duration: '2h 05m',
    departureDate: moment().add('2', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1007,
    flight_code: 'PD - 901',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 14000,
    duration: '2h 05m',
    departureDate: moment().add('2', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1008,
    flight_code: 'PD - 870',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 5000,
    duration: '2h 05m',
    departureDate: moment().add('3', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('3', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1009,
    flight_code: 'PD - 456',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 7000,
    duration: '2h 05m',
    departureDate: moment().add('3', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('3', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1010,
    flight_code: 'PD - 327',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 11000,
    duration: '2h 05m',
    departureDate: moment().add('3', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('3', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1011,
    flight_code: 'PD - 420',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 15000,
    duration: '2h 05m',
    departureDate: moment().add('3', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('3', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1012,
    flight_code: 'PD - 440',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 5200,
    duration: '2h 05m',
    departureDate: moment().add('4', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('4', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1013,
    flight_code: 'PD - 450',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 7000,
    duration: '2h 05m',
    departureDate: moment().add('4', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('4', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1014,
    flight_code: 'PD - 450',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 7000,
    duration: '2h 05m',
    departureDate: moment().add('4', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('4', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1015,
    flight_code: 'PD - 127',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 11000,
    duration: '2h 05m',
    departureDate: moment().add('4', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('4', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 1016,
    flight_code: 'PD - 098',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 14000,
    duration: '2h 05m',
    departureDate: moment().add('4', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('4', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2000,
    flight_code: 'PD - 202',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 5000,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2001,
    flight_code: 'PQ - 272',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 5500,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2002,
    flight_code: 'PA - 152',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 5750,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2003,
    flight_code: 'AZ - 201',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 7000,
    duration: '1h 55m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2004,
    flight_code: 'EF - 203',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 9000,
    duration: '1h 55m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2005,
    flight_code: 'EF - 203',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 12000,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2006,
    flight_code: 'EF - 203',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 13000,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2007,
    flight_code: 'EF - 203',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 14500,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2008,
    flight_code: 'RE - 204',
    origin: 'Delhi',
    destination: 'Rajasthan',
    fare: 10500,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2009,
    flight_code: 'ER - 901',
    origin: 'Delhi',
    destination: 'Rajasthan',
    fare: 13500,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2010,
    flight_code: 'ER - 901',
    origin: 'Delhi',
    destination: 'Rajasthan',
    fare: 14500,
    duration: '2h 10m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2011,
    flight_code: 'ER - 901',
    origin: 'Delhi',
    destination: 'Rajasthan',
    fare: 11500,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2012,
    flight_code: 'ER - 901',
    origin: 'Delhi',
    destination: 'Rajasthan',
    fare: 12500,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2013,
    flight_code: 'QW - 284',
    origin: 'Delhi',
    destination: 'Rajasthan',
    fare: 14000,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2014,
    flight_code: 'RT - 504',
    origin: 'Delhi',
    destination: 'Rajasthan',
    fare: 16000,
    duration: '2h 05m',
    departureDate: moment().format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2015,
    flight_code: 'PD - 670',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 5000,
    duration: '2h 05m',
    departureDate: moment().add('1', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('1', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2016,
    flight_code: 'PD - 109',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 10000,
    duration: '2h 05m',
    departureDate: moment().add('1', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('1', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2017,
    flight_code: 'PD - 560',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 15000,
    duration: '2h 05m',
    departureDate: moment().add('1', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('1', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2018,
    flight_code: 'PD - 212',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 5000,
    duration: '2h 05m',
    departureDate: moment().add('2', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2019,
    flight_code: 'PD - 321',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 7000,
    duration: '2h 05m',
    departureDate: moment().add('2', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2020,
    flight_code: 'PD - 435',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 10000,
    duration: '2h 05m',
    departureDate: moment().add('2', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2021,
    flight_code: 'PD - 126',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 12000,
    duration: '2h 05m',
    departureDate: moment().add('2', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2022,
    flight_code: 'PD - 901',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 14000,
    duration: '2h 05m',
    departureDate: moment().add('2', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('2', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2023,
    flight_code: 'PD - 870',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 5000,
    duration: '2h 05m',
    departureDate: moment().add('3', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('3', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2032,
    flight_code: 'PD - 456',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 7000,
    duration: '2h 05m',
    departureDate: moment().add('3', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('3', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2024,
    flight_code: 'PD - 327',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 11000,
    duration: '2h 05m',
    departureDate: moment().add('3', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('3', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2025,
    flight_code: 'PD - 420',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 15000,
    duration: '2h 05m',
    departureDate: moment().add('3', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('3', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2026,
    flight_code: 'PD - 440',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 5200,
    duration: '2h 05m',
    departureDate: moment().add('4', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('4', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2027,
    flight_code: 'PD - 450',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 7000,
    duration: '2h 05m',
    departureDate: moment().add('4', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('4', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2028,
    flight_code: 'PD - 450',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 7000,
    duration: '2h 05m',
    departureDate: moment().add('4', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('4', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2029,
    flight_code: 'PD - 127',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 11000,
    duration: '2h 05m',
    departureDate: moment().add('4', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('4', 'days').add('2', 'hours')
  },
  {
    type: 'one-way',
    id: 2030,
    flight_code: 'PD - 098',
    origin: 'Delhi',
    destination: 'Pune',
    fare: 14000,
    duration: '2h 05m',
    departureDate: moment().add('4', 'days').format('DD MM YYYY'),
    arrivalTime: moment().add('4', 'days').add('2', 'hours')
  },
  {
    type: 'return',
    id: 5,
    route_one_code: 'LH - 961',
    route_two_code: 'LH - 870',
    origin: 'Pune',
    destination: 'Delhi',
    route_one_fare: 5000,
    route_two_fare: 5000,
    route_one_departure: moment().add(1, 'hours'),
    route_one_arrival: moment().add(3, 'hours'),
    route_two_departure: moment().add(7, 'hours'),
    route_two_arrival: moment().add(8, 'hours'),
    departureDate: moment().format('DD MM YYYY'),
    returnDate: moment().add('1', 'days').format('DD MM YYYY'),
    route_one_duration: '2h 10m',
    route_two_duration: '1h 55m'
  },
  {
    type: 'return',
    id: 6,
    route_one_code: 'EA - 512',
    route_two_code: 'EA - 640',
    origin: 'Pune',
    destination: 'Delhi',
    route_one_fare: 6500,
    route_two_fare: 6500,
    route_one_departure: moment().add(2, 'hours'),
    route_one_arrival: moment().add(4, 'hours'),
    route_two_departure: moment().add(8, 'hours'),
    route_two_arrival: moment().add(9, 'hours'),
    departureDate: moment().format('DD MM YYYY'),
    returnDate: moment().add('1', 'days').format('DD MM YYYY'),
    route_one_duration: '2h 10m',
    route_two_duration: '1h 55m'
  },
  {
    type: 'return',
    id: 7,
    route_one_code: 'RT - 412',
    route_two_code: 'RT - 530',
    origin: 'Pune',
    destination: 'Delhi',
    route_one_fare: 8000,
    route_two_fare: 9000,
    route_one_departure: moment().add(3, 'hours'),
    route_one_arrival: moment().add(5, 'hours'),
    route_two_departure: moment().add(9, 'hours'),
    route_two_arrival: moment().add(10, 'hours'),
    departureDate: moment().format('DD MM YYYY'),
    returnDate: moment().add('1', 'days').format('DD MM YYYY'),
    route_one_duration: '2h 10m',
    route_two_duration: '1h 55m'
  },
  {
    type: 'return',
    id: 8,
    route_one_code: 'QA - 490',
    route_two_code: 'QA - 930',
    origin: 'Pune',
    destination: 'Rajasthan',
    route_one_fare: 8500,
    route_two_fare: 9700,
    route_one_departure: moment().add(4, 'hours'),
    route_one_arrival: moment().add(5, 'hours'),
    route_two_departure: moment().add(8, 'hours'),
    route_two_arrival: moment().add(9, 'hours'),
    departureDate: moment().format('DD MM YYYY'),
    returnDate: moment().add('1', 'days').format('DD MM YYYY'),
    route_one_duration: '2h 10m',
    route_two_duration: '1h 55m'
  },
  {
    type: 'return',
    id: 340,
    route_one_code: 'QA - 129',
    route_two_code: 'QA - 952',
    origin: 'Pune',
    destination: 'Rajasthan',
    route_one_fare: 9500,
    route_two_fare: 9500,
    route_one_departure: moment().add(4, 'hours'),
    route_one_arrival: moment().add(5, 'hours'),
    route_two_departure: moment().add(8, 'hours'),
    route_two_arrival: moment().add(9, 'hours'),
    departureDate: moment().format('DD MM YYYY'),
    returnDate: moment().add('1', 'days').format('DD MM YYYY'),
    route_one_duration: '2h 10m',
    route_two_duration: '1h 55m'
  },
  {
    type: 'return',
    id: 3004,
    route_one_code: 'EA - 210',
    route_two_code: 'EA - 620',
    origin: 'Pune',
    destination: 'Delhi',
    route_one_fare: 6500,
    route_two_fare: 6500,
    route_one_departure: moment().add(2, 'hours'),
    route_one_arrival: moment().add(4, 'hours'),
    route_two_departure: moment().add(8, 'hours'),
    route_two_arrival: moment().add(9, 'hours'),
    departureDate: moment().format('DD MM YYYY'),
    returnDate: moment().add('2', 'days').format('DD MM YYYY'),
    route_one_duration: '2h 10m',
    route_two_duration: '1h 55m'
  },
  {
    type: 'return',
    id: 3001,
    route_one_code: 'EA - 210',
    route_two_code: 'EA - 620',
    origin: 'Pune',
    destination: 'Delhi',
    route_one_fare: 8000,
    route_two_fare: 8000,
    route_one_departure: moment().add(2, 'hours'),
    route_one_arrival: moment().add(4, 'hours'),
    route_two_departure: moment().add(8, 'hours'),
    route_two_arrival: moment().add(9, 'hours'),
    departureDate: moment().format('DD MM YYYY'),
    returnDate: moment().add('2', 'days').format('DD MM YYYY'),
    route_one_duration: '2h 10m',
    route_two_duration: '1h 55m'
  },
  {
    type: 'return',
    id: 3000,
    route_one_code: 'PF - 210',
    route_two_code: 'EA - 450',
    origin: 'Pune',
    destination: 'Delhi',
    route_one_fare: 6500,
    route_two_fare: 6500,
    route_one_departure: moment().add(2, 'hours'),
    route_one_arrival: moment().add(4, 'hours'),
    route_two_departure: moment().add(8, 'hours'),
    route_two_arrival: moment().add(9, 'hours'),
    departureDate: moment().format('DD MM YYYY'),
    returnDate: moment().add('2', 'days').format('DD MM YYYY'),
    route_one_duration: '2h 10m',
    route_two_duration: '1h 55m'
  },
  {
    type: 'return',
    id: 3020,
    route_one_code: 'PF - 210',
    route_two_code: 'EA - 450',
    origin: 'Pune',
    destination: 'Delhi',
    route_one_fare: 12000,
    route_two_fare: 12000,
    route_one_departure: moment().add(2, 'hours'),
    route_one_arrival: moment().add(4, 'hours'),
    route_two_departure: moment().add(8, 'hours'),
    route_two_arrival: moment().add(9, 'hours'),
    departureDate: moment().format('DD MM YYYY'),
    returnDate: moment().add('2', 'days').format('DD MM YYYY'),
    route_one_duration: '2h 10m',
    route_two_duration: '1h 55m'
  },
  {
    type: 'return',
    id: 4000,
    route_one_code: 'LH - 961',
    route_two_code: 'LH - 870',
    origin: 'Delhi',
    destination: 'Pune',
    route_one_fare: 5000,
    route_two_fare: 5000,
    route_one_departure: moment().add(1, 'hours'),
    route_one_arrival: moment().add(3, 'hours'),
    route_two_departure: moment().add(7, 'hours'),
    route_two_arrival: moment().add(8, 'hours'),
    departureDate: moment().format('DD MM YYYY'),
    returnDate: moment().add('1', 'days').format('DD MM YYYY'),
    route_one_duration: '2h 10m',
    route_two_duration: '1h 55m'
  },
  {
    type: 'return',
    id: 4001,
    route_one_code: 'EA - 512',
    route_two_code: 'EA - 640',
    origin: 'Delhi',
    destination: 'Pune',
    route_one_fare: 6500,
    route_two_fare: 6500,
    route_one_departure: moment().add(2, 'hours'),
    route_one_arrival: moment().add(4, 'hours'),
    route_two_departure: moment().add(8, 'hours'),
    route_two_arrival: moment().add(9, 'hours'),
    departureDate: moment().format('DD MM YYYY'),
    returnDate: moment().add('1', 'days').format('DD MM YYYY'),
    route_one_duration: '2h 10m',
    route_two_duration: '1h 55m'
  },
  {
    type: 'return',
    id: 4002,
    route_one_code: 'RT - 412',
    route_two_code: 'RT - 530',
    origin: 'Delhi',
    destination: 'Pune',
    route_one_fare: 8000,
    route_two_fare: 9000,
    route_one_departure: moment().add(3, 'hours'),
    route_one_arrival: moment().add(5, 'hours'),
    route_two_departure: moment().add(9, 'hours'),
    route_two_arrival: moment().add(10, 'hours'),
    departureDate: moment().format('DD MM YYYY'),
    returnDate: moment().add('1', 'days').format('DD MM YYYY'),
    route_one_duration: '2h 10m',
    route_two_duration: '1h 55m'
  },
  {
    type: 'return',
    id: 4003,
    route_one_code: 'QA - 137',
    route_two_code: 'QA - 968',
    origin: 'Delhi',
    destination: 'Rajasthan',
    route_one_fare: 9000,
    route_two_fare: 9000,
    route_one_departure: moment().add(4, 'hours'),
    route_one_arrival: moment().add(5, 'hours'),
    route_two_departure: moment().add(8, 'hours'),
    route_two_arrival: moment().add(9, 'hours'),
    departureDate: moment().format('DD MM YYYY'),
    returnDate: moment().add('1', 'days').format('DD MM YYYY'),
    route_one_duration: '2h 10m',
    route_two_duration: '1h 55m'
  },
  {
    type: 'return',
    id: 4005,
    route_one_code: 'QA - 480',
    route_two_code: 'QA - 593',
    origin: 'Delhi',
    destination: 'Rajasthan',
    route_one_fare: 9500,
    route_two_fare: 9500,
    route_one_departure: moment().add(4, 'hours'),
    route_one_arrival: moment().add(5, 'hours'),
    route_two_departure: moment().add(8, 'hours'),
    route_two_arrival: moment().add(9, 'hours'),
    departureDate: moment().format('DD MM YYYY'),
    returnDate: moment().add('1', 'days').format('DD MM YYYY'),
    route_one_duration: '2h 10m',
    route_two_duration: '1h 55m'
  },
  {
    type: 'return',
    id: 4006,
    route_one_code: 'EA - 210',
    route_two_code: 'EA - 620',
    origin: 'Delhi',
    destination: 'Pune',
    route_one_fare: 6500,
    route_two_fare: 6500,
    route_one_departure: moment().add(2, 'hours'),
    route_one_arrival: moment().add(4, 'hours'),
    route_two_departure: moment().add(8, 'hours'),
    route_two_arrival: moment().add(9, 'hours'),
    departureDate: moment().format('DD MM YYYY'),
    returnDate: moment().add('2', 'days').format('DD MM YYYY'),
    route_one_duration: '2h 10m',
    route_two_duration: '1h 55m'
  },
  {
    type: 'return',
    id: 4007,
    route_one_code: 'EA - 210',
    route_two_code: 'EA - 620',
    origin: 'Delhi',
    destination: 'Pune',
    route_one_fare: 8000,
    route_two_fare: 8000,
    route_one_departure: moment().add(2, 'hours'),
    route_one_arrival: moment().add(4, 'hours'),
    route_two_departure: moment().add(8, 'hours'),
    route_two_arrival: moment().add(9, 'hours'),
    departureDate: moment().format('DD MM YYYY'),
    returnDate: moment().add('2', 'days').format('DD MM YYYY'),
    route_one_duration: '2h 10m',
    route_two_duration: '1h 55m'
  },
  {
    type: 'return',
    id: 4008,
    route_one_code: 'PF - 210',
    route_two_code: 'EA - 450',
    origin: 'Delhi',
    destination: 'Pune',
    route_one_fare: 6500,
    route_two_fare: 6500,
    route_one_departure: moment().add(2, 'hours'),
    route_one_arrival: moment().add(4, 'hours'),
    route_two_departure: moment().add(8, 'hours'),
    route_two_arrival: moment().add(9, 'hours'),
    departureDate: moment().format('DD MM YYYY'),
    returnDate: moment().add('2', 'days').format('DD MM YYYY'),
    route_one_duration: '2h 10m',
    route_two_duration: '1h 55m'
  },
  {
    type: 'return',
    id: 4009,
    route_one_code: 'PF - 468',
    route_two_code: 'EA - 459',
    origin: 'Delhi',
    destination: 'Pune',
    route_one_fare: 12000,
    route_two_fare: 12000,
    route_one_departure: moment().add(2, 'hours'),
    route_one_arrival: moment().add(4, 'hours'),
    route_two_departure: moment().add(8, 'hours'),
    route_two_arrival: moment().add(9, 'hours'),
    departureDate: moment().format('DD MM YYYY'),
    returnDate: moment().add('2', 'days').format('DD MM YYYY'),
    route_one_duration: '2h 10m',
    route_two_duration: '1h 55m'
  }
]

const airports = [
    { name: 'Pune', code: 'PNQ' },
    { name: 'Rajasthan', code: 'RAJ' },
    { name: 'Delhi', code: 'DEL' },
    { name: 'Banglore', code: 'BLR' },
    { name: 'Ahemdabad', code: 'AMD' }
]
//Get all flights
router.get('/', function(req, res, next){
    res.json(flights);
})

//Get all airportlists
router.get('/', function(req, res, next){
    res.json(airports);
})

const prod = {
    id:3, name: 'Product3', desc: 'Electronics'
}


//add new flight
router.post('/', function(req, res, next){
    const flight = new Flights(req.body);
    flight.save().then(flight => {
        res.json('flight added successfully');
    })
    .catch(err => {
        res.status(400).json("Error while creating the flight");
    });
});

//get a product

router.get('/:id', function(req, res){
    const id = req.params.id;
    const query = Flights.find({'id':id}, function(err, flight){
        res.json(flight);
    });
})

//delete a product
router.delete('/:id', function(req, res){
    Flights.findOneAndRemove(
        {'id': req.params.id},
        function(err, flight) {
            if(err) res.json(err);
            else res.json('Successfully removed flight');
        }
    )
})

module.exports = router;