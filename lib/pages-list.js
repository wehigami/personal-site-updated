let fs = require('fs');
let path = require('path');

let dirname = path.dirname(`M:\\Creative\\Coding\\Fullstack\\nextjs\\personal-website\\pages\\pages`)

fs.readdir(dirname, (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });