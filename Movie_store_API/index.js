const express = require("express")
const { connection ,MoviesModel} = require("./db.js")
const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to homepage")
})

app.get("/movies", async(req,res)=>{
    const query = req.query
    // const result = await MoviesModel.find({title:{$in:[query.q]}})
    const result = await MoviesModel.find({title:query.q})
    res.send(result)
})



app.listen(8080, async ()=>{
    try{
        await connection
        console.log("Connected to DB successfully")
    }catch{(err)=>{
        console.log(err)
    }}
    console.log("Server running on port 8080")
})