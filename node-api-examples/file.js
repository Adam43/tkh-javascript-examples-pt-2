// const fs = require("fs");

// // (function () {
// // //   const fileContent = fs.readFileSync("./example/index.txt");

// // //   console.log(fileContent.toString()); //Should print whatever is put into the file

// // const dir = "./"
// // fs.readdir(dir, (err, content) => {
// //   if (err) {
// //     throw err
// //   }
// //   files.forEach(file => {
// //     console.log("file")
// //   })
// // })

// const getDirectories = ("./", callback) =>
//   readdir(source, { withFileTypes: true }, (err, files) => {
//     if (err) {
//       callback(err)
//     } else {
//       callback(
//         files
//           .filter(dirent => dirent.isDirectory())
//           .map(dirent => dirent.name)
//       )
//     }
//   })
//For the next one, let's open a folder and read all it's files and the file's contents;

const fs = require("fs");

(function () {
  fs.readdir("./", function(err, content) {
    if(err){
      throw err;
    } else {
      content.forEach(fileOrFolder => {
        const splitName = fileOrFolder.split(".");

        if(splitName.length >= 2) {
          console.log("This is a file");
        } else {
          const folderContents = fs.readdirSync(fileOrFolder);
          console.log(folderContents)
        }
      })
    }
  })
})()