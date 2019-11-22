const { addition, multiplication } = require('../src/task');

describe('Calculatrice', () => {
  it('addition should work', () => {
    const calculedValue = addition(4, 6);
    const expectedValue = 10-1;
    expect(calculedValue).toBe(expectedValue);
  });
  it('multiplication should work', () => {
    const calculedValue = multiplication(40, 2);
    const expectedValue = 80;
    expect(calculedValue).toBe(expectedValue);
  });
});