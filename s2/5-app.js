const express = require("express");

const app = express();

app.get("/user", [
  (req, res, next) => {
    console.log("Handle the 1st request");
    next();
  },
  (req, res, next) => {
    console.log("Handle the 2nd request");
    // res.status(200).send("Hello second request");
    next();
  },
  (req, res, next) => {
    console.log("Handle the 3rd request");
    //res.status(200).send("Hello 3rd request");
    next();
  },
  (req, res, next) => {
    console.log("Handle the 4th request");
    res.status(200).send("Hello 4th request");
    //next();
  },
]);

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
