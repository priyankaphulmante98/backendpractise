const usermodel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getusers =  async(req, res) => {
    const users=await usermodel.find()
   return res.send({message:"all users",users});
  
}


exports.userSignup= async (req, res) => {
    const { username, email, password } = req.body;
  
    const valid = await usermodel.findOne({ email });
    if (!valid) {
      bcrypt.hash(password, 4, function (err, hash) {
        const signupData = usermodel.create({ username, email, password: hash });
        console.log(hash);
      });
      return res.send({
        message: "signup sucessfully",
      });
    } else {
      // alert("already have an account")
      return res.send("already have an account");
    }
  }

  exports.userLogin=async (req, res) => {
    const { email, password } = req.body;
    const data = await usermodel.findOne({ email });
    console.log(data);
    if (data) {
      const match = await bcrypt.compare(password, data.password);
  
      if (match) {
        let token = jwt.sign(
          {
            email,
            id: data._id,
          },
          "secret123",
          { expiresIn: "7days" }
        );
  
        res.send({ message: "login sucessfully", token });
      } else {
        res.send({ message: "check password" });
      }
    } else {
      return res.send({ message: "login failed" });
    }
  }