const fs = require("fs");

setImmediate(() => console.log("set Immediate"));

setTimeout(() => console.log("timer expired 0"));

Promise.resolve("Resolve").then(() => console.log("resolve"));

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log("Seoncd timer"));

  process.nextTick(() => console.log("2nd next tick"));

  setImmediate(() => console.log("2nd immediate"));

  console.log("file reading");
});

process.nextTick(() => console.log("1st next tick"));

console.log("last line of the code");
