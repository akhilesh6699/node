const mongoose = require("mongoose");
// to establish connection with the Mongodb and create a file called asset
mongoose.connect("mongodb://127.0.0.1/asset", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Database Connection Established!");
});
