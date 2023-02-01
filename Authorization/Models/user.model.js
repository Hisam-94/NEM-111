const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email:String,
    password:String,
    role:{type:String,enum:["customer","seller"],default:"customer"}
},{timestamps: true,versionKey:false})

const UserModel = mongoose.model("user",userSchema)

module.exports = {
    UserModel
} 