console.log("Sum module executed");

const x = "This is a module";
function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

module.exports = { calculateSum, x };
