const asyncHandler = require("express-async-handler");
const User = require(registerUser,loginUser,currentUser);


const registerUser = asyncHandler(async(req,res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    const userAvailable = await
    res.json({message:`register the user `});
});

const loginUser = asyncHandler(async(req,res) => {
    res.json({message:`login user `});
});

const currentUser = asyncHandler(async(req,res) => {
    res.json({message:`current user `});
});

module.exports = {registerUser,loginUser,currentUser};