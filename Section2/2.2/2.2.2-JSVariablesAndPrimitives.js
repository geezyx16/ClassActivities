// create a variable called "name" that references a string
const name = "Gabe";
// create a variable called "favoriteSong" that references a string
let favoriteSong = "Coat of Many Colors";
// create a variable called "wage" that references a number
let wage = 50;
// create a variable called "age" that references a number
let age = 26;
// create a variable called "onlyChild" that references a boolean
let onlyChild = true;
// create a variable called "satisfied" that references a boolean
let satisfied = false;
// create a variable called "favoriteThing" that references ANY primitive value
// print the data type of "favoriteThing"
let favoriteThing = "trading";
console.log(typeof favoriteThing);
// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "Heal the World";
// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteSong = 22;
console.log(typeof favoriteThing);
// Happy Birthday!
// Reassign "age" to a new value
age = 27;
// You got a big raise at work.
// Reassign "wage" to a new value
wage = 55;
// Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true;
// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log(
  name +
    " has a favorite song called " +
    favoriteSong +
    " and is very satisfied with his wage of " +
    wage +
    "."
);
