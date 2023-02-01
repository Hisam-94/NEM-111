const express = require("express")
const {connection,TopicModel} = require("./db.js")
const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to Home Page")
})

app.get("/topics", async (req,res)=>{
    const result = await TopicModel.find()
    res.send(result)
})

app.post("/addTopic", async (req,res)=>{
    const payload = req.body
    const new_topic = new TopicModel(payload)
    await new_topic.save()
    res.send("Successfully added")
})

app.listen(5000, async()=>{
    try {
        await connection
        console.log("Connected to DB Successfully")
    } catch (error) {
        console.log("Failed to connect to DB")
        console.log(error)
    }
    console.log("listening on port 5000")
})