console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("| S.No | Symbol |    Name       | Example             | Definition                         |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|  1  |   &&   | Logical AND    | true && false       | Returns true if both are true      |");
console.log("|  2  |   ||   | Logical OR     | true || false       | Returns true if one is true        |");
console.log("|  3  |   !    | Logical NOT    | !true               | Inverts the boolean value          |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");


console.log("\n\n");


console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|    | Symbol |     Name        | Example              | Description                        |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|  1 |   &&   | Logical AND     | let x = true; x && false | Returns true if both are true      |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");

let x = true;
let resultAnd = x && false; // Logical AND example
console.log("true && false =", resultAnd); // Output: false


console.log("\n\n");


console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|    | Symbol |     Name        | Example              | Description                        |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|  2 |   ||   | Logical OR      | let y = false; y || true | Returns true if one is true        |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");

let y = false;
let resultOr = y || true; // Logical OR example
console.log("false || true =", resultOr); // Output: true


console.log("\n\n");


console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|    | Symbol |     Name        | Example              | Description                        |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|  3 |   !    | Logical NOT     | let z = true; !z     | Inverts the boolean value          |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");

let z = true;
let resultNot = !z; // Logical NOT example
console.log("!true =", resultNot); // Output: false


console.log("\n\n");


// Another Logical AND example with more conditions
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|    | Symbol |     Name        | Example              | Description                        |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|    |   &&   | Logical AND     | let a = true; a && (5 > 3) | Returns true if both conditions are true |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");

let a = true;
let resultAndComplex = a && (5 > 3); // Logical AND with comparison
console.log("true && (5 > 3) =", resultAndComplex); // Output: true


console.log("\n\n");


// Another Logical OR example with more conditions
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|    | Symbol |     Name        | Example              | Description                        |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");
console.log("|    |   ||   | Logical OR      | let b = false; b || (10 < 20) | Returns true if one condition is true |");
console.log("+----+--------+----------------+----------------------+------------------------------------+");

let b = false;
let resultOrComplex = b || (10 < 20); // Logical OR with comparison
console.log("false || (10 < 20) =", resultOrComplex); // Output: true
