console.log("Definition of break and continue in JavaScript:");
console.log("1. break: The 'break' statement is used to terminate a loop or switch statement prematurely.");
console.log("2. continue: The 'continue' statement skips the current iteration of a loop and proceeds to the next iteration.");
console.log("--------------------------------------------------------------------------------------------------");
console.log("Example of using break in a loop:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at i =", i);
        break;  // Exit the loop when i is 5
    }
    console.log("Current number:", i);
}
console.log("--------------------------------------------------------------------------------------------------");
console.log("Example of using continue in a loop:");
for (let i = 1; i <= 10; i++) {
      console.log(" number:", i);
        continue;  // Skip the rest of the loop for even numbers
    }
  

console.log("--------------------------------------------------------------------------------------------------");
console.log("Combined Example: Using break and continue in a loop:");
for (let i = 1; i <= 20; i++) {
    if (i === 15) {
        console.log("Breaking the loop at i =", i);
        break;  // Exit the loop when i is 15
    }
    console.log("Current number:", i);
        continue;  // Skip numbers that are divisible by 3
    }
  

console.log("--------------------------------------------------------------------------------------------------");
