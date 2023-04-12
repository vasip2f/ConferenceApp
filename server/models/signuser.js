const mongoose = require('mongoose') 
// const connection = mongoose.createConnection("mongodb+srv://chowdeswari:chow123@cluster0.extegca.mongodb.net/?retryWrites=true&w=majority")

const userSchema = mongoose.Schema({
    name:{type:String,required:true, trim:true},
    email:{type:String,required:true,trim:true},
    password:{type:String,required:false,trim:true,minlength:6},
    googleId:{type:String,required:false},
    id:{type:String}

})
const signupUser = mongoose.model("signupUser",userSchema)
module.exports= signupUser