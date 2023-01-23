const { Router } = require("express");
const usermodel = require("../models/user.model");

const { getusers, userSignup, userLogin } = require("../controller/user.controller");
const user = Router();

user.get("/",getusers);

user.post("/signup",userSignup);

user.post("/login", userLogin);

module.exports = user;
