// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "evening";
// Create a variable "greeting" that references a template literal
let greeting = `Good ${timeOfDay}!`;
// Use "greeting" in the template literal to create a message like "Good morning!" or "Good evening!
console.log(greeting);
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
console.log(`Good ${timeOfDay}!`);
// Print "greeting"
console.log(greeting);
// Create a new variable, but do not assign it a value
let favFood;
// Print the new variable and its type
console.log(typeof favFood);
// What type should we expect?

// Assign the variable a value that indicates the variable is purposely blank
favFood = null;
// What value should we assign?

// Print the variable and its type again
console.log(favFood, typeof favFood);
// What type should we expect?

// Try to print a variable that does not exist
console.log(favFood);
// What should we expect to print in the CLI?
//undefined
// Print "greeting" again
console.log(greeting);
// Will this line run?
