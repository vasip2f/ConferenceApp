const {model, Schema, default: mongoose} = require('mongoose')


const EventSchema = Schema({
    username:{
        type:String,
        required:[true, "Please Enter Your name"]
    },
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    roomName: {
        type: String,
        required: [true, "Please Select Your Room"]
    },
    StartTime: {
        type:Date,
        required: [true, "Start time is missing"]
    },
    EndTime:{
        type:Date,
        required: [true, "End time is missing"]
    },
    availability:{
        type: Boolean,
        required: true
    }
   
});



const event = new mongoose.model("Event", EventSchema);


module.exports = event;
