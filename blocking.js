const fs = require("fs");
const crypto = require("crypto");

var a = 54321;
var b = 12345;

const key = crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");

console.log(key);

fs.readFile("./file.txt", "utf8", (data) => {
  console.log(data);
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
