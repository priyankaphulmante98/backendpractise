
const userModel = require("../Model/user.model");

const bcrypt = require("bcrypt");


exports.userGet =async (req, res) => {
  const users = await userModel.find();
  return res.send(users);
}


exports.userSignup = async (req, res) => {
  // const { name, email, password } = req.body;

  // try {
  //   const present = await userModel.findOne({ email });
  //   if (!present) {
  //     bcrypt.hash(password, 3, (err, hash) => {
  //       console.log(hash);
  //       const user = userModel.create({ ...req.body, password: hash });
  //       return res.send("signed up");
  //     });
  //   } else {
  //     return res.send("user already exist");
  //   }
  // } catch (err) {
  //   return res.send("something went wrong");
  // }
  const {name, email, password, confirmpassword} = req.body;
  console.log(password, confirmpassword)

  try {
      const userPresent = await user.findOne({email:email})
      
      if(userPresent){
          res.status(401).json("user already exist")

      }else if(password !== confirmpassword){
          res.status(401).json("password dosen't match")

      }else{
          const finalUser = new user({
              name, email, password, confirmpassword
          })
          const userData = await finalUser.save()
          res.status(200).json(userData)
      }

  } catch (error) {
      console.log(error)
  }
};



exports.userLogin=async (req, res) => {
    const { email, password } = req.body;
  
    const user = await userModel.findOne({ email });
    if (user) {
      const match = await bcrypt.compare(password, user.password); //normal password , hashed password fromn database
  
      if (match) {
        //now generate token
        const token = jwt.sign({ email, id: user._id }, "SECRET123", {
          expiresIn: "2days",
        });
  
        return res.send({ message: "logged in successfull", token });
        //login
      } else {
        return res.send("wrong password");
      }
    } else {
      return res.send("user notfound");
    }
  }