const User  = require('../models/signuser') 

const googleSignIn = async(req,res)=>{

    const {email,name,token,googleId} = req.body

    try{
         const oldUser = User.findOne({email});

         if(oldUser){
            const result = {_id: oldUser._id.toString(),email,name}
            return res.status(200).json({result,token})
         }
         const result = await User.create({
            email,
            name,
            googleId
         })
         res.status(200).json({result,token})
    }
    catch(error){
        res.status(500).json({message:"something went wrong"});
        console.log(error)
    }
}
module.exports= googleSignIn