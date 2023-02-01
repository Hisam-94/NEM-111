const express = require("express")
const {connection,MarksModel} = require("./db.js")

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to homepage")
})

app.get("/marks", async (req,res)=>{
    const result = await MarksModel.find()
    res.send(result)
})

app.post("/addMarks", async (req,res)=>{
    const {mark1,mark2,remarks} = req.body;
    const new_mark = new MarksModel({
        mark1,
        mark2,
        remarks
    })
    await new_mark.save()
    res.send("Data added successfully")
})

app.listen(8080,async ()=>{
    await connection
    console.log("Connected to DB")
    console.log("Server running on port 8080")
})