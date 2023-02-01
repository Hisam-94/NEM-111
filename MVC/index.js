const express = require("express")
const { connection } = require("./Config/db")
const {TodosRoutes} = require("./Routes/Todos.routes.js")
const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.use("/todos", TodosRoutes)


app.listen(8080, async ()=>{
    try{
        await connection
        console.log("Connected to DB successfully")
    }
    catch(err){
        console.log(err)
    }
    console.log("Server running on por 8080")
})