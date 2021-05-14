import operate from './operate';

const calculate = (data, button) => {
  let { total, next, operation } = data;
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['+', '-', 'x', '÷'];

  if (button === '+/-') {
    total *= -1;
    next *= -1;
  }
  if (button === '=') {
    while (next !== null) {
      total = operate(total, next, operation);
      next = null;
    }
  }
  if (button === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (button === '.') {
    if (!next.includes('.')) {
      next += button;
    }
  }

  if (button === '%') {
    total /= 100;
    next /= 100;
  }

  if (nums.includes(button)) {
    while (next === null) {
      next = '';
    }
    next += button;
  }

  if (operators.includes(button)) {
    while (next !== null && operation !== null) {
      total = operate(total, next, operation);
      operation = button;
      next = null;
      operation = null;
    }
    while (next !== null) {
      total = next;
      next = null;
    }
    if (next == null || operation == null) {
      operation = button;
    }
  }

  return { total, next, operation };
};

export default calculate;
