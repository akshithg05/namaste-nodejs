const fs = require("node:fs");

var a = 100;
setImmediate(() => {
  console.log("This is the set immediate operation callback");
});

let p1 = new Promise((resolve, reject) => {
  resolve("This is the resolved promise");
});

p1.then((val) => console.log(val));

fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("This is the file read");
  }
});

setTimeout(() => {
  console.log("This is the set timeout operation callback");
}, 0);

process.nextTick(() => {
  console.log("This is the process next tick function");
});

function A() {
  console.log("A value is :", a);
}
A();

console.log("This is the end of the file");

// Predicted output order
// 1. A value is : 100
// 2. This is the end of the file
// 3. This is the process next tick function
// 4. This is a resolved promise
// 5. This is the set timeout operation callback
// 6. This is the set immediate operation callback"
// 7. This is the file read
