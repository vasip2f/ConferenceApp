const mongoose = require('mongoose') 
const connection = mongoose.createConnection("mongodb+srv://chowdeswari:chow123@cluster0.extegca.mongodb.net/?retryWrites=true&w=majority")
const tourSchema = mongoose.Schema({
    title:String,
    description:String,
    name:String,
    creator:String,
    tags:[String],
    imageFile:{
        type:String,
        default:" "
    },
    createdAt:{
        type:Date,
        default:new Date(),
    },
    likeCount:{
        type:Number,
        default:0

    }
})

const TourModel = connection.model("Tour",tourSchema)

module.exports =TourModel