/* Calculator for basic operations
*/
const prompt = require('prompt-sync')();

let firstNumber = Number(prompt('What is first number? '));
let operation = prompt('Enter your operator: ');
let secondNumber = Number(prompt('What is second number? '));

if (operation === '+') {
    console.log(`The sum is ${firstNumber + secondNumber}`);
} else if (operation === '-') {
    console.log(`The difference is ${firstNumber - secondNumber}`);
} else if (operation === '*') {
    console.log(`The product is ${firstNumber * secondNumber}`);
} else if (operation === '/') {
    if (secondNumber === 0) {
        console.log('Cannot divide by zero');
    } else {
        console.log(`The quotient is ${(firstNumber / secondNumber).toFixed(2)}`);
    }
} else {
    console.log('Enter a valid operation');
}
