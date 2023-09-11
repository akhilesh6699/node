const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// to declare the type of input for the Employee details

const employeeSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
