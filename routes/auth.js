const express = require("express");
const router = express.Router();
const login = require("../controllers/auth/login"); // fetch login.js

const register = require("../controllers/auth/register"); //fetch register.js

router.post("/register", register);
// router.post("/login", AuthController.login);
router.post("/login", login);

module.exports = router;
