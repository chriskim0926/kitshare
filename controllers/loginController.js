const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require('bcrypt');


router.post("/", (req, res) => {

bcrypt.hash(req.body.password, 10)
.then((hashPasword) => {
    console.log(hashPasword)

    const newUser = {
        email: req.body.email,
        password: hashPasword
    }
    
    console.log(newUser);
    User.create(newUser)
    .then(newUser => {
        res.json(newUser);
    })
    .catch((err) => {
        console.log(err)
})
  });
});

router.post("/signin", (req, res) => {
    console.log(req.body);
    User.findOne({email: req.body.email})
    .then(foundUser => {
        console.log(foundUser);
        bcrypt.compare(req.body.password, foundUser.password)
        .then((result) => {
            console.log(result);
            if(result){
                res.json({
                    token:"kitshare",
                })
            }else {
                console.log("password does not match")
    
            }
        })
     
    })
  });
  
  module.exports = router;