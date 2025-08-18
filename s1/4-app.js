require("./4-xyz");
const { calculateSum, x } = require("./4-sum");

console.log(globalThis === global);

calculateSum(3, 4);
console.log(x);
