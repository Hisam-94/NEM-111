const {Router} = require("express")
const bcrypt = require('bcrypt');
const { UserModel } = require("../Models/user.model")

const SignUpRouter = Router()

SignUpRouter.post("/",async(req,res)=>{
    try{
        const {email,password,role} = req.body
        const present = await UserModel.findOne({email:email})
        if(present){
            res.send({msg:"User already exists"})
        }else{
            bcrypt.hash(password, 6, async function(err, hash) {
                if(err)
                {
                    console.log(err)
                    res.send({msg:"Something went wrong"})
                }else
                {
                    const data = new UserModel({email:email,password:hash,role:role})
                    await data.save()
                    res.send({msg:"Account created successfully"})
                }
            });
        }
    }
    catch(err){
        console.log(err)
        res.send({msg:"Something went worng"})
    }
})

module.exports = {
    SignUpRouter
}