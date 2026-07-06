const express = require("express");
const studentRoutes = require("./routes/students");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Student API is running"
    });
});

app.use("/students", studentRoutes);

module.exports = app;
