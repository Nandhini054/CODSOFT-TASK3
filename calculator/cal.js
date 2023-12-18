const display = document.getElementById('display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const calculateButton = document.getElementById('calculate');

let currentInput = '';
let operator = '';
let result = null;

function updateDisplay() {
  display.value = currentInput || '0';
}

numbers.forEach(number => {
  number.addEventListener('click', () => {
    currentInput += number.textContent;
    updateDisplay();
  });
});

operators.forEach(op => {
  op.addEventListener('click', () => {
    if (currentInput !== '') {
      operator = op.textContent;
      currentInput += operator;
      updateDisplay();
    }
  });
});

clearButton.addEventListener('click', () => {
  currentInput = '';
  operator = '';
  result = null;
  updateDisplay();
});

calculateButton.addEventListener('click', () => {
  if (operator && currentInput !== '') {
    const expression = currentInput.split(operator);
    const num1 = parseFloat(expression[0]);
    const num2 = parseFloat(expression[1]);

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Error';
        break;
      default:
        result = 'Error';
        break;
    }

    currentInput = String(result);
    operator = '';
    updateDisplay();
  }
});
