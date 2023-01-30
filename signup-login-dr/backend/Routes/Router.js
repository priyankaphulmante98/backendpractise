const express = require('express');
const router = new express.Router()
const user = require('../model/userModel')


router.post('/signup', async (req, res) => {
    // console.log("post")
    const {name, email, password} = req.body;
        console.log(password)

        // try {
        //     const userPresent = await user.findOne({email:email})
            
        //     if(userPresent){
        //         res.status(401).json("user already exist")

        //     }
        //     // else if(password !== confirmpassword){
        //     //     res.status(401).json("password dosen't match")

        //     // }
        //     else{
        //         const finalUser = new user({
        //             name, email, password
        //         })
        //         const userData = await finalUser.save()
        //         res.status(200).json(userData)
        //     }

        // } catch (error) {
        //     console.log(error)
        // }

})




module.exports = router;

