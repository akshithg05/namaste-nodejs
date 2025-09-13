const fs = require("node:fs");
const crypto = require("crypto");

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("This is the first pbkdf2 function");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("This is the second pbkdf2 function");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("This is the third pbkdf2 function");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("This is the fourth pbkdf2 function");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("This is the 5th pbkdf2 function");
});

// fs.readFile("./file.txt", "utf-8", (err, data) => {
//   console.log("File data is read");
// });
