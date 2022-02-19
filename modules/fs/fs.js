const path = require("path");
const fs = require("fs");

//Creating a folder inside the curr_dir 
fs.mkdir(path.join(__dirname, "/fs_folder"), (error) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log("Folder created sucessfully.");

  // Creating a file
  // To create a file inside the directory you must have or create a directory
  fs.writeFile(path.join(__dirname, "/fs_folder", "fs_index.html"), "Hi mom! This is filesystem in action", (error) => {
    if (error) {
      return console.log('Error:', error);
    }
    console.log("File created sucessfully.");
  });

  // Adding content to a file
  fs.appendFile(path.join(__dirname, "/fs_folder", "fs_index.html"), "Now i'm adding content", (error) => {
    if (error) {
      return console.log('Error:', error);
    }
    console.log("File updated sucessfully.");
  });

  // Reading the content from a file
  fs.readFile(path.join(__dirname, "/fs_folder", "fs_index.html"), "utf-8", (error, data) => {
    if (error) {
      return console.log('Error:', error);
    }
    console.log(data);
  });
});