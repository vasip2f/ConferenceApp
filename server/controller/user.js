const bcrypt = require("bcryptjs") 
const jwt = require('jsonwebtoken') 


const secreat = "chow" 
const User  = require('../models/signuser')

 const signUp = async(req,res) =>{

    const{email,password,firstName,lastName} = req.body


    try{
        const oldUser = await User.findOne({email}) 
        if(oldUser){
            return res.status(400).json({message:"User already Existed"})
        }

        const hassedpassword = await bcrypt.hash(password,12)
        const result = await User.create({
            email,
            password:hassedpassword,
            name:`${firstName} ${lastName}`

        });
        const token = jwt.sign({email:result.email,id:result._id},secreat, {expiresIn:"1h"})
        res.status(201).json({result,token});
    }catch(error){
        res.status(500).json({message:"Something went Wrong"})
        console.log(error)
    }

}
module.exports= signUp