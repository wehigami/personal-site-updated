const fs = require("fs");
const path = require("path");

function namePages() {
//   let navigation = [
//     { name: "1", href: "/", current: true },
//     { name: "2", href: "/projects", current: false },
//     { name: "3", href: "#", current: false },
//   ];
let navigation = [
    {name: 'Home', href: '/', currnet: true},
];
  let pagesArray = [];
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

  for (let x = 0; x < pagesArray.length; x++) {
    let pageLink = {name: pagesArray[x], href: "/" + pagesArray[x], current: false};
    navigation.push(pageLink);
  }

  console.log(navigation);
  //replace navigation names with values from pagesArray
}

namePages();