const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: function (origin, callback) {
      return callback(null, true);
    },
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
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
