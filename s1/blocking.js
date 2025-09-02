const crypto = require("crypto");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// password based key derivation function 2.
const key = crypto.pbkdf2Sync("password", "salt", 50000000, 50, "sha512");
console.log("Key is generated");

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is :", c);
