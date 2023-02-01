
const express = require("express")
const fs = require("fs")
const app = express()
app.use(express.json())

// app.get("/",(req,res)=>{
//     const {name,age} = req.query
//     res.send(`Welcome ${name} you are ${age >18 ? "Eligible" : "Not Eligible"}`)
// })

// app.get("/about/:name",(req,res)=>{
//     const {name} = req.params
//     res.send("Welcome"+" "+ name)
// })

// app.post("/addDetails",(req,res)=>{
//     console.log(req.body)
//     res.send("Thank you for making a POST request")
// })

app.get("/",(req,res)=>{
    const data = fs.readFileSync("./db.json",{encoding:"utf-8"})
    const parsedData = JSON.parse(data)
    const todos = parsedData.todos
    console.log(todos)
    res.send(todos)
})

app.post("/",(req,res)=>{
    const payload = req.body
    const data = fs.readFileSync("./db.json",{encoding:"utf-8"});
    const parsedData = JSON.parse(data)
    const todos = parsedData.todos
    const newData = [...todos,payload]
    parsedData.todos = newData
    const finalData = JSON.stringify(parsedData)
    fs.writeFileSync("./db.json",finalData,{encoding:"utf-8"})
    res.send("Data created Successfully")
})

app.delete("/:id",(req,res)=>{
    const {id} = req.params;
    const data = fs.readFileSync("./db.json",{encoding:"utf-8"});
    parsedData = JSON.parse(data)
    const todos = parsedData.todos
    const deleted = todos.find((item)=>item.id === Number(id))
    const newData = todos.filter((item)=>item.id !== Number(id))
    parsedData.todos = newData
    const finalData = JSON.stringify(parsedData)
    console.log(deleted)
    if(deleted)
    {
        fs.writeFileSync("./db.json",finalData,{encoding:"utf-8"})
        res.send(finalData)
    }else
    {
        res.send("Somethind is wrong")
    }
})

app.put("/:id",(req,res)=>{
    const id = req.params.id;
    const payload = req.body;
    const data = fs.readFileSync("./db.json",{encoding:"utf-8"});
    const parsedData = JSON.parse(data);
    const todos = parsedData.todos; 
    const filterData = todos.filter((item)=>item.id !== Number(id))
    const newData = [...filterData,payload]
    parsedData.todos = newData
    const finalData = JSON.stringify(parsedData)
    fs.writeFileSync("./db.json",finalData,{encoding:"utf-8"})
    res.send(finalData)
})

app.listen(5000)