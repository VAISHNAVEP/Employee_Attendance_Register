const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const UserRoutes = require("./Routers/UserRoutes");
require("dotenv").config();


const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST","PUT"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/", UserRoutes);
mongoose
  .connect("mongodb+srv://vaishnavclt78:F6aeWleHdNgga3LJ@cluster0.pmb9eay.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(3006, () => {
  console.log("server running successfully");
});




