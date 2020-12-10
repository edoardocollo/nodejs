const nomeDirectory = process.argv[2];
const extension = `.${process.argv[3]}`;
const fs = require('fs');
const path = require('path');
fs.readdir(nomeDirectory, function (error,list) {
  list.forEach((item) => {
    if (path.extname(item) == extension) {

      console.log(item);
    }
  });

});
