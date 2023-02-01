var jwt = require('jsonwebtoken');
require("dotenv").config()


const authentication = async (req,res,next)=>{
    if(!req.headers.authorization){
        return res.send({msg:"Please login again"})
    }
    const token = req.headers?.authorization?.split(" ")[1]
    jwt.verify(token, process.env.KEY, function(err, decoded) {
        if(err)
        {
            res.send({msg:"Please login"})
        }else{
            req.body.email = decoded.email
            next()
        }
    });
    
}

module.exports = {
    authentication
}