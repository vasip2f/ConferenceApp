const mongoose = require('mongoose') 
// const connection = mongoose.createConnection("mongodb+srv://chowdeswari:chow123@cluster0.extegca.mongodb.net/?retryWrites=true&w=majority")

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:false},
    googleId:{type:String,required:false},
    id:{type:String}

})
const signupUser = mongoose.model("signupUser",userSchema)
module.exports= signupUser