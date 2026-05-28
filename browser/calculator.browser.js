function formatResult(value) {
  if (typeof value === 'number' && Number.isFinite(value)) return String(value);
  return String(value);
}

function runCalculatorOnce() {
  const firstNumber = Number(prompt('What is first number?'));
  const operation = (prompt('Enter your operator (+, -, *, /)') || '').trim();
  const secondNumber = Number(prompt('What is second number?'));

  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
    return { ok: false, message: 'Please enter valid numbers.' };
  }

  if (operation === '+') {
    return { ok: true, message: `The sum is ${formatResult(firstNumber + secondNumber)}` };
  }
  if (operation === '-') {
    return { ok: true, message: `The difference is ${formatResult(firstNumber - secondNumber)}` };
  }
  if (operation === '*') {
    return { ok: true, message: `The product is ${formatResult(firstNumber * secondNumber)}` };
  }
  if (operation === '/') {
    if (secondNumber === 0) return { ok: false, message: 'Cannot divide by zero.' };
    return { ok: true, message: `The quotient is ${(firstNumber / secondNumber).toFixed(2)}` };
  }

  return { ok: false, message: 'Enter a valid operation.' };
}

const outputEl = document.getElementById('output');
const runBtn = document.getElementById('runBtn');

function setOutput(text) {
  if (!outputEl) return;
  outputEl.textContent = text;
}

if (runBtn) {
  runBtn.addEventListener('click', () => {
    const { ok, message } = runCalculatorOnce();
    setOutput(message);
    if (ok) console.log(message);
    else console.warn(message);
  });
}

