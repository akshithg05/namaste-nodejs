const fs = require("node:fs");

var a = 100;
setTimeout(() => {
  console.log("This is the set timeout operation callback");
}, 0);

fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("This is the file read");
  }
});

setImmediate(() => {
  console.log("This is the set immediate operation callback");
});

function A() {
  console.log("A value is :", a);
}
A();

console.log("This is the end of the file");
