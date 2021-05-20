function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
test('4 + 5 = 9', () => {
  expect(sum(4, 5)).toBe(9);
});
test('0 + 0 = 0', () => {
  expect(sum(0, 0)).toBe(0);
});
test('throws an error when a string is passed', () => {
  expect(() => { sum(4, '5') }).toThrow();
});
test('error message is "parameters must be numbers"', () => {
  expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
});