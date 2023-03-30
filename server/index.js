
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const signup = require('./Routes/user')
const cors = require("cors");
const logIn = require("./Routes/signin");
const googleSign = require("./Routes/googleSignIn");
const TourController = require("./controller/tour");
const app = express()
app.use(express.json())
app.use(cors())
app.use('/', signup)
app.use('/', logIn)
app.use('/', googleSign)
app.use('/', TourController)
app.use(bodyParser.json());
app.use("/api/calendar", require("./controller/CalendarController"));

mongoose.connect('mongodb+srv://MERN:56A6fYfsWunT92RK@cluster0.fippvac.mongodb.net/?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => {
  app.listen(5000, () => console.log("App is connected to port 5000 "))
}).catch((err) => {
  console.log("Db not connected")
})

//56A6fYfsWunT92RK