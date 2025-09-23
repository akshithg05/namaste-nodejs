const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello, this is the test route!");
});

app.use("/hello", (req, res) => {
  res.send("Hej!");
});

app.use("/", (req, res) => {
  res.send("Hello from the root page");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
