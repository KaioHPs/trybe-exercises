const { encode, decode } = require('./Exerc_1.js');

describe('Checks functions encode and decode', () => {
  it('Checks if encode and decode are functions', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  })
  it('Checks if encode turns "aeiou" into "12345"', () => {
    expect(encode('aeiou')).toBe('12345');
  })
  it('Checks if encode turns "12345" into "aeiou"', () => {
    expect(decode('12345')).toBe('aeiou');
  })
  it('Checks if only vowels and numbers from 1 to 5 are changed', () => {
    expect(encode('abcde')).toBe('1bcd2');
    expect(decode('13579')).toBe('aiu79');
  })
  it('Checks if the returned string has the same length as the parameter', () => {
    expect(encode('abcde').length).toBe('abcde'.length);
    expect(decode('13579').length).toBe('13579'.length);
  })
})