var jwt = require('jsonwebtoken');
const { UserModel } = require('../Models/user.model');
require("dotenv").config()

const authorization = (Role)=>{

    return async (req,res,next)=>{
        const {email} = req.body
        const user = await UserModel.findOne({email:email})
        if(user.role !== Role)
        {
            res.send({msg:"You are not authorised"})
        }else
        {
            next()
        }
    }
}

module.exports = {
    authorization
}
