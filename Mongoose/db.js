const mongoose = require("mongoose")

// const connectDB = async ()=>{
//     const conn = await mongoose.connect("mongodb://127.0.0.1:27017/mypersonalDB")
//     console.log("Connected to DataBase")

//     await MarksModel.insertMany([
//         {
//             mark1:25,
//             mark2:32,
//             remarks:"please improve"
//         },
//         {
//             mark1:35,
//             mark2:42,
//             remarks:"please improve"
//         }
//     ])

//     const result = await MarksModel.find()
//     console.log(result)

//     conn.disconnect()

// }
// connectDB()

// const markSchema = mongoose.Schema({
//     mark1 : Number,
//     mark2 : Number,
//     remarks: String
// })

// const MarksModel = mongoose.model("mark",markSchema)

const connection = mongoose.connect("mongodb://127.0.0.1:27017/mypersonalDB")

const markScema = mongoose.Schema({
    mark1:Number,
    mark2:Number,
    remarks:String
},{timestamps:true,versionKey:false})
const MarksModel = mongoose.model("mark",markScema)

module.exports = {
    connection,
    MarksModel
}
