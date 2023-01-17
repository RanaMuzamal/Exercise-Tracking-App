require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
//const cors = require("cors");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
const app = express();
//app.use(cors());
// Middleware
app.use(express.json());


//Routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// Connect to Database and listen on Server
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`MongoDB connected successfully & Server is running at http://localhost:${process.env.PORT}`);
    });
}).catch((err)=>{
    console.log(err);
})
