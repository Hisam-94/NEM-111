const express = require("express")
const { connection } = require("./Config/db")
const { LoginRoute } = require("./Routes/login.route")
const { ProductRoute } = require("./Routes/product.route")
const { SignUpRouter } = require("./Routes/signup.route")
const app = express()
app.use(express.json())

app.use("/signup",SignUpRouter)

app.use("/login",LoginRoute)

app.use("/product",ProductRoute)

app.listen(8080, async()=>{
    try{
        await connection
        console.log("Connected to DB successfully")
    }
    catch(err){
        console.log(err)        
    }
    console.log("Server running on port 8080")
})