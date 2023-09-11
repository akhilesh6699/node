const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
//to add a new user to the backend

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    // convert the password into encoded format in the data base
    const hashedPassword = await bcrypt.hash(password, salt);
    //creating new user
    const newUser = await User.create({
      username,
      password: hashedPassword,
    });
    //register success message
    res.send({
      message: "User registered successfully.",
      newUser,
    });
  } catch (error) {
    return res.json(500).message(error); // to show error in backend and also throw error in front end
  }
};

module.exports = register;
