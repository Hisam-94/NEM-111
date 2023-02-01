const { Router } = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config()
const { UserModel } = require("../Models/User.model");

const ProductsRoute = Router();

ProductsRoute.get("/", async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    jwt.verify(token, process.env.KEY, function(err, decoded) {
        if(err){
            res.send("Please login")
        }else{
            res.send("Products page data ....")
        }
      });
  } catch (err) {
    console.log(err);
    res.send("Something went wrong please try again");
  }
});

module.exports = {
    ProductsRoute,
};
