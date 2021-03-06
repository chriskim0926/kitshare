const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/kitshare",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected!");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

const RestaurantController = require("./controllers/restaurantContollers");
const LoginController = require("./controllers/loginController");

app.use(express.static("client/build"));


app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.use("/api/restaurants", RestaurantController);
app.use("/api/auth", LoginController);

// FIXME: Actually check the database for user and match credentials.
app.post("/api/signin", (req, res) => {
  res.json({
    message: "Successfully signed in.",
    token: "kitshare",
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});