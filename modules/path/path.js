const path = require("path");

//Basename -> getting the name of the file that we're currently executing
console.log("FILE_NAME:", path.basename(__filename));

//Directory
console.log("DIR_NAME", path.dirname(__filename));

//Extension
console.log("FILE_EXTENSION", path.extname(__filename));

//File object
console.log("FILE OBJECT", path.parse(__filename));

// Join
console.log(path.join(__dirname, "test", "teste.html"));


