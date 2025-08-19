require("./4-xyz");
const { calculateSum, x } = require("./4-sum");
// const { sum } = require("./calculate/sum");
// const { multiply } = require("./calculate/multiply");

const { sum, multiply } = require("./calculate");
const data = require("./4-data.json");

console.log(globalThis === global);

calculateSum(3, 4);
console.log(x);

z = "Hello world"; // non -strict mode as this is common modules file
console.log(z);

console.log("###############");

sum(5, 4);
multiply(5, 4);

console.log("Data: ", data);
