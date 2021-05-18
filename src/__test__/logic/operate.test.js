import Big from 'big.js';
import operate from '../../logic/operate';

describe('operate', () => {
  it('adds two numbers and returns the result', () => {
    const result = operate(1, 2, '+');
    expect(result).toStrictEqual(Big(3));
  });
  it('subtracts two numbers and returns the result', () => {
    const result = operate(9, 3, '-');
    expect(result).toStrictEqual(Big(6));
  });
  it('multiplies two numbers and returns the result', () => {
    const result = operate(2, 6, '*');
    expect(result).toStrictEqual(Big(12));
  });
  it('divides two numbers and returns the result', () => {
    const result = operate(12, 4, '÷');
    expect(result).toStrictEqual(Big(3));
  });
  it('modifies a number to percentage', () => {
    const result = operate(45, 1, '%');
    expect(result).toStrictEqual(Big(0.45));
  });
  it('returns the opposite of a number', () => {
    const result = operate(45, -1, '+/-');
    expect(result).toStrictEqual(Big(-45));
  });
  it('returns Infinity when dividing a positive number with 0', () => {
    const result = operate(45, 0, '÷');
    expect(result).toStrictEqual('Infinity');
  });
  it('returns -Infinity when dividing a negative number with 0', () => {
    const result = operate(-45, 0, '÷');
    expect(result).toStrictEqual('-Infinity');
  });
  it('returns Undefined when trying to calculate one of the undefined forms (0/0, Infinity/0)', () => {
    const result = operate('Infinity', '0', '÷');
    expect(result).toStrictEqual('Undefined');
  });
  it('retrun Error if we provide non valid numbers', () => {
    const result = operate('someString', 'NotANumber', '+');
    expect(result).toStrictEqual('Error');
  });
});
