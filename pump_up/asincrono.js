const fs = require('fs');
const url = process.argv[2];
fs.readFile(url, 'utf8', function(error, data){
  console.log(data.split('\n').length - 1);
})













// var string1 = fs.readFile(url,function (error,data){
//   const numeroLinee = data.slice('\n').length;
//   console.log(numeroLinee);
// });
//


// function contatoreLinee(string){
//   const numeroLinee = string.slice('\n').length;
//   // return numeroLinee;
//   console.log(contatoreLinee(string));
// }
