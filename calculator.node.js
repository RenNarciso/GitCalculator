/* Calculator for basic operations, for practice
*/

const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function main() {
  const rl = readline.createInterface({ input, output });

  const firstNumber = Number(await rl.question('What is first number? ')); // Number converts the value into a real number
  const operation = (await rl.question('Enter your operator (+, -, *, /): ')).trim();
  const secondNumber = Number(await rl.question('What is second number? '));

  rl.close();

  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
    console.log('Please enter valid numbers.');
    return;
  }

  if (operation === '+') {
    console.log(`the sum is ${firstNumber + secondNumber}`);
  } else if (operation === '-') {
    console.log(`the difference is ${firstNumber - secondNumber}`);
  } else if (operation === '*') {
    console.log(`the product is ${firstNumber * secondNumber}`);
  } else if (operation === '/') {
    if (secondNumber === 0) {
      console.log('Cannot divide by zero.');
      return;
    }
    console.log((firstNumber / secondNumber).toFixed(2));
  } else {
    console.log('Enter a valid operation');
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

