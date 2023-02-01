const express = require("express")
const app = express()
app.use(express.json())
const timelogger = (req,res,next)=>{
    const startTime = new Date().getTime()
    next()
    const endTime = new Date().getTime()
    const time = endTime - startTime
    console.log(time)
}
app.use(timelogger)

app.get("/",(req,res)=>{
    res.send("Homepage")
})
app.listen(5000,()=>console.log("Server running on port 5000"))