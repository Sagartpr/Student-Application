const express = require("express");
const { 

    registerUser,
    loginUser,

} = require("./userControllers");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

// router.get("/current", currentUser);
module.exports = router;

