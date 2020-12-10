var numberArray = process.argv;
var somma = 0;
for (var i = 2; i < numberArray.length; i++) {
  somma += Number(numberArray[i]);
}
console.log(somma);
