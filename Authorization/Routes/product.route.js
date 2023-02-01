const {Router} = require("express")
const { authentication } = require("../Middleware/authentication")
const { authorization } = require("../Middleware/authorization")
ProductRoute = Router()

ProductRoute.get("/",authentication,authorization("customer"),(req,res)=>{
    res.send("This data is for customers only")
})

ProductRoute.get("/",authentication,authorization("seller"),(req,res)=>{
    res.send("This data is for sellers only")
})

module.exports = {
    ProductRoute
}