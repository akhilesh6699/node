const express = require("express");
const morgan = require("morgan");
require("../node/db/connect");
const cors = require("cors");
const bodyParser = require("body-parser");

const EmployeeRoute = require("./routes/employee");
const AuthRoute = require("./routes/auth");

const app = express();

app.use(morgan("dev"));
//to process the data sent as an HTTP request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//to access the resource from remote hosts
app.use(cors());
// assign a port number to the local host to run the program
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api", AuthRoute);
app.use("/api/employee", EmployeeRoute);
