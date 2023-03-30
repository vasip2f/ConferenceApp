const express = require("express")

const google = require('../controller/googlesignin')

const googleSign = express.Router() 

googleSign.post('/googlesignIn',google) 

module.exports = googleSign