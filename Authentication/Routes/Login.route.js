const { Router } = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config()
const { UserModel } = require("../Models/User.model");

const LoginRoute = Router();

LoginRoute.post("/", async (req, res) => {
  try {
    const isValid = await UserModel.findOne(req.body);
    if (isValid) {
      const token = jwt.sign({}, process.env.KEY,{ expiresIn: '1h' });
      res.send({status:"Login Successfull",token:token});
    } else {
      res.send("Invalid credentials");
    }
  } catch (err) {
    console.log(err);
    res.send("Something went wrong please try again");
  }
});

module.exports = {
  LoginRoute,
};
