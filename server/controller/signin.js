const bcrypt = require("bcryptjs") 
const jwt = require('jsonwebtoken') 


const secreat = "chow" 
const User  = require('../models/signuser') 


const signIn = async (req,res) =>{

    const{email,password} = req.body 
    try{
        const oldUser = await User.findOne({email});
        if(!oldUser){
           return res.status(404).json({message: "User Doesn't Exists"})
        }
        const ispasswordCorrect  = await bcrypt.compare(password,oldUser.password);
        if(!ispasswordCorrect){
            return res.status(400).json({message :"invalid Credentials"})
        }
        const token = jwt.sign({email:oldUser.email,id:oldUser._id},secreat,{expiresIn:"1h"});
        res.status(200).json({result: oldUser,token})

    }catch(error){
        res.status(500).json({message:"Something went Wrong"})
        console.log(error)
    }

}

module.exports = signIn