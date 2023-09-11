const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

const login = (req, res, next) => {
  var username = req.body.username; // collects data from login page username input
  var password = req.body.password; // collects data from login page password input
  //to find the user with username
  User.findOne({ username: username }).then((user) => {
    console.log(user);
    if (user) {
      //to compare the password after the user name matches
      bcrypt.compare(password, user.password, function (err, result) {
        console.log(password, user.password);
        if (err) {
          res.status(500).json({
            error: err,
          });
        }
        if (result) {
          let token = jwt.sign({ username: user.username }, "verySecretValue", {
            expiresIn: "1h",
          });
          res.json({
            //login message if both username and password matches
            message: "Login Successfull!",
            token,
          });
        } else {
          //if user matches and password in wrong
          res.status(403).json("password is incorrect");
        }
      });
    } else {
      //if user name is wrong
      res.status(404).json("user not found");
    }
  });
};
module.exports = login;
