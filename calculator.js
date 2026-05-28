/* Calculator for basic operations, for practice
*/

let firstNumber=Number(prompt('What is first number?')); //'Number' converts the value into a real number
let operation=prompt('Enter your operator');
let secondNumber=Number(prompt('What is second number?'));

if (operation=='+'){
    console.log(`the sum is ${firstNumber+secondNumber}`);
} else if (operation=='-'){
    console.log(`the difference ${firstNumber-secondNumber}`);
} else if (operation=='*'){
    console.log(`the product ${firstNumber*secondNumber}`);
} else if (operation=='/'){
    console.log((firstNumber/secondNumber).toFixed(2))
} else {
    console.log('Enter a valid operation')
}

