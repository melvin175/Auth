const express = require("express");
const app = express();
// const dotenv = require("dotenv");
const mogoose = require("mongoose");

//connect to mognoose
mogoose.connect(
  "mongodb+srv://melvinfernando:melvin1705@cluster0.trfyo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to db")
);

//Import route
const authRoute = require("./routes/auth");

//Middlewares:
app.use(express.json());

//Route middleware
app.use("/api/user", authRoute);

app.listen(3000, () => console.log("Server up and running"));

// mongodb+srv://melvinfernando:melvin1705@cluster0.trfyo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority