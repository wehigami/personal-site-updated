const fs = require("fs");
const path = require("path");

let test = [];
let dirname = path.dirname(
  `M:\\Creative\\Coding\\Fullstack\\nextjs\\personal-website\\pages\\pages`
);

// fs.readdir(dirname, (err, files) => {
//   files.forEach((file) => {
//     if (file === "_app.js" || file === "index.js") {
//       return;
//     } else {
//       file.replace(/\.js$/, "");
//       test.push(file);
//     }
//   });
// });

let files = fs.readdirSync(dirname);

files.forEach((file) => {
  file.replace(/\.js$/, "");
  if (file === "_app.js" || file === "index.js") {
    return;
  } else {
    test.push(file);
  }
});

console.log(test);
