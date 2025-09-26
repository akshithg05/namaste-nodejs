const express = require("express");

const app = express();

app.use("/admin", (req, res, next) => {
  let token = "yz";
  if (token === "xyz") {
    next();
  } else {
    res.status(401).send("Token does not match");
  }
});

app.get("/user", (req, res) => {
  console.log("Getting list of users for user");
  res.send("Getting list of users for user.");
});

app.get("/admin/getAllusers", (req, res, next) => {
  res.status(200).send("These are the list of users you are looking for");
  console.log("Fetched all users");
});

app.get("/admin/deleteAllUsers", (req, res, next) => {
  res.status(401).send("Deleted users");
  console.log("Deleted all users");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
