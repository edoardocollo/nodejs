var fs = require('fs');
const url = process.argv[2];
// console.log(url);
const buffer = fs.readFileSync(url);
// console.log(buffer);

const string = buffer.toString();
// console.log(string);
const splitted = string.split("\n");
console.log(splitted.length - 1);
