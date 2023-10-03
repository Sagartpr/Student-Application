const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5001;
app.use(express.json());
app.use("/api/student", require('/home/sagar/Desktop/Student Application/routers/studentRoutes.js'));
app.use("/api/users", require('/home/sagar/Desktop/Student Application/routers/userRoutes.js'));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server runnning on port ${port}`);
});

//app.use("/api/student", require("./routers/controllers/studentRoutes"));
