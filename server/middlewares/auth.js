const jwt = require('jsonwebtoken');
const UserModel = require('../models/signuser')
const secreat = "test" 

const auth = async(req,res,next)=>{


      try {
        const token = req.headers.authorization.split(" ")[1]

        const isCustoAuth  = token.lenght < 500
        let decodedData 
        if(token && isCustoAuth){
            decodedData = jwt.verify(token,secreat)
            req.userId = decodedData ?.indexOf;
        }else{

            decodedData = jwt.decode(token) 

            const googleId = decodedData?.sub.toString();
            const user = await UserModel.findOne({googleId})
            req.userId = user?._id;
        }
        next()
      }
      catch(error){
        console.log(error) 
      }
    
}
 module.exports = auth