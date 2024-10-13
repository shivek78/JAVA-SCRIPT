const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display the header
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("+                                                                                           +");
console.log("+                         Example of using if-else in JavaScript:                           +");
console.log("+                                                                                           +");
console.log("+----+--------+----------------+----------------------+------------------------------------+");



console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("Program 3: Validate user password.");
let password = "258"

if (password === "secret123") {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("Program 2: Evaluate student's grade based on score.");
let score = "A"
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}
}
console.log("+----+--------+----------------+----------------------+------------------------------------+");
// Age calculator
console.log("Age Calculator");

// Prompt user for input
rl.question("Enter your age: ", (age) => {
    // Convert input to a number
    age = Number(age);

    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }

    // Close the readline interface
    rl.close();
});
console.log("+----+--------+----------------+----------------------+------------------------------------+");
