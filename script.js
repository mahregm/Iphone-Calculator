// Calculator Variables
let currentInput = '0';
let operator = '';
let storedValue = 0;
let optState = false;

// DOM Elements
const screen = document.querySelector('.create');
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.btn-orange');
const clearButton = document.querySelector('.clear');
const percentButton = document.querySelector('.percent');
const plusMinusButton = document.querySelector('.plusMinus');

// Event Listeners for number buttons
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    handleNumberClick(button.textContent);
    updateScreen();
  });
});

// Event Listeners for operator buttons
operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    handleOperatorClick(button.textContent);
    updateScreen();
  });
});

// Event Listener for clear button
clearButton.addEventListener('click', () => {
  clearCalculator();
  updateScreen();
});

// Event Listener for percent button
percentButton.addEventListener('click', () => {
  applyPercent();
  updateScreen();
});

// Event Listener for plus/minus button
plusMinusButton.addEventListener('click', () => {
  togglePlusMinus();
  updateScreen();
});

// Event Listener for equals button
equalsButton.addEventListener('click', () => {
  calculateResult();
  updateScreen();
});

// Functions
function handleNumberClick(number) {
  if (currentInput === '0' || optState) {
    currentInput = '';
    optState = false;
  }
  currentInput += number;
}

function handleOperatorClick(op) {
  if (operator) {
    calculateResult();
  }
  operator = op;
  storedValue = parseFloat(currentInput);
  optState = true;
}

function calculateResult() {
  const currentValue = parseFloat(currentInput);
  switch (operator) {
    case '+':
      storedValue += currentValue;
      break;
    case '-':
      storedValue -= currentValue;
      break;
    case 'x':
      storedValue *= currentValue;
      break;
    case '÷':
      if (currentValue === 0) {
        alert("Cannot divide by zero");
        clearCalculator();
        return;
      }
      storedValue /= currentValue;
      break;
  }
  currentInput = storedValue.toString();
  operator = '';
}

function clearCalculator() {
  currentInput = '0';
  operator = '';
  storedValue = 0;
}

function applyPercent() {
  const currentValue = parseFloat(currentInput);
  currentInput = (currentValue / 100).toString();
}

function togglePlusMinus() {
  currentInput = (parseFloat(currentInput) * -1).toString();
}

function updateScreen() {
  screen.textContent = currentInput;
}
