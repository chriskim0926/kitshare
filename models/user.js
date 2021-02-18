const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: "Enter the user email",
  },
   password: {
    type: String,
    trim: true,
  },

});

const User = mongoose.model("user", userSchema);

module.exports = User;

