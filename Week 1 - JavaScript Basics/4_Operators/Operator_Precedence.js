console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("| S.No | Symbol |    Name       | Example             | Precedence Level                   |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|  1  |   ()   | Parentheses    | (2 + 3) * 4         | 1 (Highest)                        |");
console.log("|  2  |   **   | Exponentiation | 2 ** 3              | 2                                  |");
console.log("|  3  |   * /  | Multiplication/Division | 4 * 5 / 2  | 3                                  |");
console.log("|  4  |   + -  | Addition/Subtraction  | 6 + 3 - 2     | 4                                  |");
console.log("|  5  |   =    | Assignment     | x = 10              | 5 (Lowest)                         |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");


console.log("\n\n");


// Example 1: Parentheses
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|    | Symbol |     Name        | Example              | Precedence Level                   |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|  1 |   ()   | Parentheses     | (2 + 3) * 4          | 1 (Highest)                        |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");

let resultParentheses = (2 + 3) * 4; // Parentheses example
console.log("(2 + 3) * 4 =", resultParentheses); // Output: 20


console.log("\n\n");


// Example 2: Exponentiation
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|    | Symbol |     Name        | Example              | Precedence Level                   |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|  2 |   **   | Exponentiation  | 2 ** 3               | 2                                  |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");

let resultExponentiation = 2 ** 3; // Exponentiation example
console.log("2 ** 3 =", resultExponentiation); // Output: 8


console.log("\n\n");


// Example 3: Multiplication/Division
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|    | Symbol |     Name        | Example              | Precedence Level                   |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|  3 |   * /  | Multiplication/Division | 4 * 5 / 2   | 3                                  |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");

let resultMulDiv = 4 * 5 / 2; // Multiplication and Division example
console.log("4 * 5 / 2 =", resultMulDiv); // Output: 10


console.log("\n\n");


// Example 4: Addition/Subtraction
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|    | Symbol |     Name        | Example              | Precedence Level                   |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|  4 |   + -  | Addition/Subtraction  | 6 + 3 - 2      | 4                                  |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");

let resultAddSub = 6 + 3 - 2; // Addition and Subtraction example
console.log("6 + 3 - 2 =", resultAddSub); // Output: 7


console.log("\n\n");


// Example 5: Assignment
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|    | Symbol |     Name        | Example              | Precedence Level                   |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|  5 |   =    | Assignment     
