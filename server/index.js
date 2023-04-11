
// import {google} from 'googleapis'
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const signup = require('./Routes/user')
const cors = require("cors");
const logIn = require("./Routes/signin");
const googleSign = require("./Routes/googleSignIn");
const TourController = require("./controller/tour");
const multer = require("multer");
const fs = require('fs')
const imageModel = require('./models/Rooms');
const EventRoute = require("./Routes/EventRoutes");
const app = express()
app.use(express.json())
app.use(cors())
app.use('/', signup)
app.use('/', logIn)
app.use('/', googleSign)
app.use('/', TourController)
app.use('/', EventRoute)
app.use(bodyParser.json());
app.use("/api/calendar", require("./controller/CalendarController"));
require("./models/Event");
const EventRecord = mongoose.model("Event");
app.use("/api/rooms", require("./controller/CalendarController"));


mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => {



  app.listen(5000, () => console.log("App is connected to port 5000 "))
}).catch((err) => {
  console.log("Db not connected")
})













//56A6fYfsWunT92RK

app.get('http://localhost:5000/api/calendar/get-events', async (req, res) => {
  try {
    const allevents = await EventRecord.find({});
    res.send({ status: "ok", data: "allevents" });

  } catch (console) {
    console.log(error)
  }
})


// Room Uploading

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploadsRooms")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage });

// app.post('/', upload.single('testImage'), (req, res) => {
//   const saveImage = new imageModel({
//     name: req.body.name,
//     img: {
//       data: fs.readFileSync('uploadsRooms', req.file.filename);
//       contentType: "image/png"
//     },
//   })
// })

// const auth2Client = new google.auth.OAuth2(
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//     process.env.REDIRECT_URL
// )

// app.get('/google', (req, res) => {});