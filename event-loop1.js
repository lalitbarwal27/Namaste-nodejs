const fs = require("fs");
const a = 100;

setImmediate(() => console.log("Set immediate"));

fs.readFile("./file.txt", "utf8", () => {
  console.log("reading file");
});

setTimeout(() => console.log("timer expired"), 0);

function printA() {
  console.log("a", a);
}

printA();
console.log("last line of file");
