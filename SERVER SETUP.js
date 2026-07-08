const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/bookmydoctor", {
})
.then(() => {
    console.log("✅ MongoDB Connected Successfully");
})
.catch((error) => {
    console.log("❌ Database Connection Failed");
    console.log(error);
});
app.get("/", (req, res) => {
    res.send("Welcome to Book My Doctor Backend");
});

app.get("/doctors", (req, res) => {
    res.json({
        message: "Doctor List",
        data: []
    });
});
app.get("/patients", (req, res) => {
    res.json({
        message: "Patient List",
        data: []
    });
});
app.get("/appointments", (req, res) => {
    res.json({
        message: "Appointment List",
        data: []
    });
});
app.get("/admin", (req, res) => {
    res.send("Admin Dashboard");
});
const PORT = 5000;

app.listen(PORT, () => {
    console.log("--------------------------------");
    console.log("Book My Doctor Backend Started");
    console.log(`Server Running at http://localhost:${PORT}`);
    console.log("--------------------------------");
});