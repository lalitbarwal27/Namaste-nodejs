/*Modules protect there variables and fucntions from leaking so to
access those in other files use modules.exports */

var x = 10;

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
  return;
}

module.exports = { calculateSum, x };
