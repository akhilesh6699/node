const express = require("express");
const morgan = require("morgan");
require("../node/db/connect");
const bodyParser = require("body-parser");

const EmployeeRoute = require("./routes/employee");
const AuthRoute = require("./routes/auth");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api", AuthRoute);
app.use("/api/employee", EmployeeRoute);
