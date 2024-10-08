const fs = require("fs");
const a = 100;

setImmediate(() => console.log("Set immediate"));

Promise.resolve("Resolved").then((res) => console.log("resolved"));

fs.readFile("./file.txt", "utf8", () => {
  console.log("reading file");
});

setTimeout(() => console.log("timer expired"), 0);

process.nextTick(() => console.log("nextTick"));

function printA() {
  console.log("a", a);
}

printA();
console.log("last line of file");
