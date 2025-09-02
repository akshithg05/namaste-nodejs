const fs = require("fs");
const https = require("https");
const crypto = require("node:crypto");

console.log("Hello world");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched data successfully!");
  res.destroy();
});

setTimeout(() => {
  console.log("Printed after 5 seconds");
}, 5000);

// Sync function - actually blocks the main thread -
const data = fs.readFileSync("./file.txt", "utf-8");
console.log("File Data -", data);
console.log("The above line is sync code");

// Async function - does not block the main thread - gives it to libUV
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Key is generated");
});

function multiply(a, b) {
  return a * b;
}

var c = multiply(3, 4);
console.log("Multiplication result is :", c);
