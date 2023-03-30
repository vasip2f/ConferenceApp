const express  = require("express") ;

const logIn = express.Router();

const signinRoute = require('../controller/signin') 

logIn.post('/login',signinRoute)

module.exports  = logIn