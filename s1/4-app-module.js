import { calculateSum2, x2 } from "./4-esmods-sum.js";

console.log("This is a module");

calculateSum2(4, 5);
console.log(x2);

z = "Hello world"; // will throw error as strict mode, this is module
console.log(z);
