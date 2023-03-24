require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
// const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
// app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

const port = process.env.PORT;

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(port, () => {
      console.log("listening for requests on port", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// const port = process.env.PORT || 5000;
// const mongo_uri = process.env.MONGO_URI ;
// const secret_word = process.env.SECRET ;
