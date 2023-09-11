const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// to declare the type of input required for he user

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    // email: {
    //   type: String,
    // },
    // phone: {
    //   type: String,
    // },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
