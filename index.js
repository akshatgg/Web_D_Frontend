// const path=require("path");
// console.log(path.sep);
// console.log(process.env.PATH);
// console.log(path.delimiter);
const filePath1='/public_html/home/index.html'
const currentfilepath= __filename;
console.log(currentfilepath)


let basename=path.basename(currentfilepath);
console.log(basename);