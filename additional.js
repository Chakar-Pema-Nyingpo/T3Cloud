// // String to Number Conversion Example in JavaScript

// // Input string
// var inputString = "42.5"; // You can replace this with any string representing a number

// // Using parseInt() function to convert string to integer
// var resultInteger = parseInt(inputString, 10); // The second parameter is the radix (base), 10 for decimal.

// // Using parseFloat() function to convert string to float
// var resultFloat = parseFloat(inputString);

// // Displaying the results
// console.log("Original String:", inputString);
// console.log("Converted to Integer:", resultInteger);
// console.log("Converted to Float:", resultFloat);

var rl = require("readline-sync");

var firstNumber = rl.question("Give me a number ");
console.log("you have entered " + firstNumber);
// firstNumber = Number(firstNumber);

var secondNumber = rl.question("Give me a another number ");
console.log("you have enterd " + secondNumber);
// secondNumber = Number(secondNumber);

var sum = Number(firstNumber) + Number(secondNumber);
console.log("the sum is " + sum);