// Logical Operators
// what do you expect each line to print?
console.log(true && false);
// prints false.
console.log(true || false);
// prints true.
console.log(!true);
// prints false.
console.log(!(true && false));
// prints true.
console.log(!(true || false));
// prints false.
console.log(false || !false);
//prints true.
// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log(undefined || null);
// prints undefined.
console.log(null || undefined);
// prints null.
console.log(!``);
//print true.
console.log(!(1 && "false"));
//prints false.
console.log(NaN || !"true");
//prints true.

// Set the age variable below equal to a number,
// then use conditional operators to construct an expression that returns...
// "full menu" if the age is over 10,
// and "kids menu" if the age is less than 10

let age;
age > 10 ? console.log("full name") : console.log("kids menu");

// Using only logical operators (no comparison operators),
// write an if statement that prints...
//  "The number is zero" when num is 0.

let num = 0;
if (!num) {
  console.log("The number is zero");
}

// Write your if statement here *
