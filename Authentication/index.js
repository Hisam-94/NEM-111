const express = require("express")
const { connection } = require("./Config/db")
const { LoginRoute } = require("./Routes/Login.route")
const { ProductsRoute } = require("./Routes/Products.route")
const { SignupRoute } = require("./Routes/SiginUp.route")
const app = express()
app.use(express.json())

app.use("/signup",SignupRoute)

app.use("/login",LoginRoute)

app.use("/products",ProductsRoute)

app.listen(8080, async ()=>{
    try{
        await connection
        console.log("Connected to DB successfully")
    }
    catch(err){
        console.log(err)
    }
    console.log("Server running on port 8080")
})