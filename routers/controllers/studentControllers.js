const asyncHandler = require("express-async-handler");
//const Student = require("../models/studentModel");
//@desc get all stduent
//@route GET/api/student/:id
//@access public

const getstudents = asyncHandler(async(req,res) => {
    res.status(200).json({message:`get all student information `});
});


const getstudent = asyncHandler(async(req,res) => {
    const student = await Student.findById(req.params.id);
    if(!student){
        res.status(404);
        throw new Error("student not found");
    }
    res.status(200).json(student);
});


//@desc post all stduent
//@route POST/api/student
//@access public

const createstudent = asyncHandler(async(req,res) => {
    console.log("The request body is:",req.body);
    const {Name,Email,Phone} = req.body;
    if(!Name || !Email || !Phone) {
        res.status(400);
        throw new Error("all feilds are mandatory");
    }
    const student = await Student.create({
        Name,
        Email,
        Phone,
    });
    res.status(201).json(student);
});


//@desc post all stduent
//@route POST/api/student/:id
//@access public

const updatestudent = asyncHandler (async(req,res) => {
    const student = await Student.findById(req.params.id);
    if(!student){
        res.status(404);
        throw new Error("student not found");
    }
    const updatedstudent = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
);
    res.status(201).json(updatedstudent);
});


//@desc post all stduent
//@route POST/api/student/:id
//@access public

const deletestudent = asyncHandler (async(req,res) => {
    const student = await Student.findById(req.params.id);
    if(!student){
        res.status(404);
        throw new Error("student not found");
    }
    await Student.remove();
    res.status(200).json(student);
});

module.exports = {

getstudents,
getstudent,
createstudent,
updatestudent,
deletestudent,

}