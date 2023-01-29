const { Router } = require("express");
const userRoute = Router();
const jwt = require("jsonwebtoken");
const {
  userSignup,
  userLogin,
  userGet
} = require("../Controller/userController");

userRoute.get("/", userGet);

userRoute.post("/signup", userSignup);

userRoute.post("/login", userLogin);

module.exports = userRoute;
