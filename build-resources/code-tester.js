const fs = require("fs");
const path = require("path");

// let test = [];
// let dirname = path.dirname(
//   `M:\\Creative\\Coding\\Fullstack\\nextjs\\personal-website\\pages\\pages`
// );

// // fs.readdir(dirname, (err, files) => {
// //   files.forEach((file) => {
// //     if (file === "_app.js" || file === "index.js") {
// //       return;
// //     } else {
// //       file.replace(/\.js$/, "");
// //       test.push(file);
// //     }
// //   });
// // });

// let files = fs.readdirSync(dirname);

// files.forEach((file) => {
//   file.replace(/\.js$/, "");
//   if (file === "_app.js" || file === "index.js") {
//     return;
//   } else {
//     test.push(file);
//   }
// });

// console.log(test);

var pagesArray = []; 
//array for the names of files from 'pages' directory

let dirname = path.dirname( 
  `M:\\Creative\\Coding\\Fullstack\\nextjs\\personal-website\\pages\\pages`
);
//get the name of the pages directory to pass into fs

let files = fs.readdirSync(dirname);
//fs reads files inside pages directory

files.forEach((file) => {
  if (file === "_app.js" || file === "index.js") {
    return;
  } else {
    file = file.replace(/\.js/, "");
    pagesArray.push(file);
  }
});
//strip .js affix and push only needed files from pages dir into the pagesArray

console.log(pagesArray);

let navigation = [
  { name: "Home", href: "/", current: true },
  { name: "test", href: "/projects", current: false },
  { name: "About Me", href: "#", current: false },
];

console.log(navigation);

for (let x = 0; x < pagesArray.length; x++) {
  navigation[x].name = pagesArray[x];
}
//replace navigation names with values from pagesArray

console.log(navigation);
