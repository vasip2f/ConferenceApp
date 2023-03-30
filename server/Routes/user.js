const express = require('express'); 

const singupRoute = express.Router() 

const signroute = require('../controller/user')     

singupRoute.post('/signup',signroute);

module.exports = singupRoute