const {Router} = require("express");
const { UserModel } = require("../Models/User.model");

const SignupRoute = Router()

SignupRoute.post("/", async(req,res)=>{
    try{
        const email = req.body;
        const present = await UserModel.findOne(email)
        console.log(present)
        if(present){
            res.send("User already exist")
        }else{
            const user = new UserModel(req.body)
            await user.save()
            res.send("Account created successfully")
        }
    }
    catch(err){
        console.log(err)
        res.send("Something went wrong please try again")
    }
})

module.exports = {
    SignupRoute
}