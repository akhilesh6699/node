const { response } = require("express");
const Employee = require("../models/Employee");
//to show the total number of employees
const index = (req, res, next) => {
  Employee.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
};
//to show the details on a particular Employee
const show = (req, res, next) => {
  let employeeID = req.body.employeeID;
  Employee.findById(employeeID)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
};
//to add new employee to the Data base
const store = (req, res, next) => {
  let employee = new Employee({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });
  employee
    .save()
    .then((response) => {
      res.json({
        message: "Employee added successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
};

//to update any changes in the details of any employee
const update = (req, res, next) => {
  let employeeID = req.body.employeeID;
  let updatedData = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  };
  Employee.findByIdAndUpdate(employeeID, { $set: updatedData })
    .then(() => {
      res.json({
        message: "Employee updated successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
};
// to delete the employee
const destroy = (req, res, next) => {
  let employeeID = req.body.employeeID;
  Employee.findByIdAndRemove(employeeID)
    .then(() => {
      res.json({
        message: "Employee deleted successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
};
module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
