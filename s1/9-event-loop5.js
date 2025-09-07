const fs = require("node:fs");
setImmediate(() => {
  console.log("This is the set immediate operation callback");
});

setTimeout(() => {
  let p1 = new Promise((resolve, reject) => {
    resolve("3rd This is the resolved promise");
  });
  p1.then((val) => console.log(val));
  console.log("This is the set timeout operation callback");
}, 0);

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

process.nextTick(() => {
  let p1 = new Promise((resolve, reject) => {
    resolve("2nd This is the resolved promise");
  });
  p1.then((val) => console.log(val));
  process.nextTick(() => {
    console.log("2nd This is the process next tick function");
  });
  console.log("This is the process next tick function");
});

console.log("This is the end of the file");
