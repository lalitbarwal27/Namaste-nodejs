const fs = require("fs");

var a = 54321;
var b = 12345;

fs.readFile("./file.txt", "utf-8", (res) => {
  console.log(res);
});

setTimeout(() => {
  console.log("TImer running");
}, 5000);

function multiply(a, b) {
  const result = a * b;
  return result;
}

console.log("I am runing");

const c = multiply(a, b);
console.log(c);
