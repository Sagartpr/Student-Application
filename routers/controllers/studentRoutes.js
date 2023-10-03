const express = require("express");
const router = express.Router();
const {
getstudent,
getstudents,
createstudent,
updatestudent,
deletestudent,
} = require("../controllers/studentControllers");

router.route("/").get(getstudents).post(createstudent);

router.route("/:id").get(getstudent).put(updatestudent).delete(deletestudent);
       

module.exports = router;