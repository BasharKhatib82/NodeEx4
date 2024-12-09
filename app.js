// Bashar Khatib    ID : 066043167
// Tareq Shaltaf    ID : 315483032

"use strict";

const fs = require("fs"); // Import file system module
const path = require("path"); // Import module for handling file paths

// Array of file names
const arr = [
  "1.txt",
  "2.txt",
  "3.txt",
  "4.txt",
  "5.txt",
  "6.txt",
  "7.txt",
  "8.txt",
  "9.txt",
  "10.txt",
];

// Variable to store the final output as a string
let arrOut = "";

// An outer loop that iterates over the given array of filenames
for (let i = 0; i < arr.length; i++) {
  let dirPath = path.join(__dirname, arr[i]);
  // Read the content of the file as a UTF-8 encoded string
  let textIn = fs.readFileSync(dirPath, "utf-8");
  let arr2 = textIn.split("\r\n");

  // Inner loop processes a limited number of lines from the file
  for (let j = 0; j <= i && j < arr2.length; j++) {
    // Split the current line into words
    let line = arr2[j].split(" ");
    // Append the processed line to the final output
    arrOut += line + "\n";
  }
}

// Write the output to a new file in the current directory
fs.writeFileSync(`${__dirname}/out.txt`, arrOut);
