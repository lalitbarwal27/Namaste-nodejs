require("./xyz.js");

const { calculateSum, calculateMultiply } = require("./calculate");
const data = require("./data.json");
var name = "Namaste NodeJS";

console.log(data);

var a = 10;
var b = 20;

console.log(name);
console.log(a + b);

console.log(globalThis === global);
console.log(globalThis === this);

console.log(calculateSum(a, b));
console.log(calculateMultiply(a, b));
