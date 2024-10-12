console.log("+----+-------------+----------------+------------------------------------+");
console.log("| S.No |   Symbol    | Example        | Description                        |");
console.log("+----+-------------+----------------+------------------------------------+");
console.log("|  1  |    ?:       | let result = (age >= 18) ? 'Adult' : 'Minor';       | Ternary operator evaluates a condition, returns one of two values based on the result |");
console.log("+----+-------------+----------------+------------------------------------+");


console.log("\n\n");


// Example 1: Ternary operator for age check
console.log("+----+-------------+----------------+------------------------------------+");
console.log("|    |   Symbol    | Example         | Description                        |");
console.log("+----+-------------+----------------+------------------------------------+");
console.log("|  1 |    ?:       | (age >= 18) ? 'Adult' : 'Minor' | Ternary condition for age check    |");
console.log("+----+-------------+----------------+------------------------------------+");

let age = 20;
let resultAgeCheck = (age >= 18) ? 'Adult' : 'Minor'; // Ternary operator example
console.log("If age is 20, result is:", resultAgeCheck); // Output: Adult


console.log("\n\n");


// Example 2: Ternary operator for even or odd check
console.log("+----+-------------+----------------+------------------------------------+");
console.log("|    |   Symbol    | Example         | Description                        |");
console.log("+----+-------------+----------------+------------------------------------+");
console.log("|  2 |    ?:       | (num % 2 === 0) ? 'Even' : 'Odd' | Ternary condition for even/odd check    |");
console.log("+----+-------------+----------------+------------------------------------+");

let num = 15;
let resultEvenOdd = (num % 2 === 0) ? 'Even' : 'Odd'; // Ternary operator for even/odd
console.log("If num is 15, result is:", resultEvenOdd); // Output: Odd


console.log("\n\n");


// Example 3: Ternary operator for discount check
console.log("+----+-------------+----------------+------------------------------------+");
console.log("|    |   Symbol    | Example         | Description                        |");
console.log("+----+-------------+----------------+------------------------------------+");
console.log("|  3 |    ?:       | (total > 1000) ? 'Discount Applied' : 'No Discount' | Ternary condition for ")
