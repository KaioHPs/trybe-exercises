const { getUserName } = require('./Exerc_2_3.js');

describe(`Checks the getUserName function`, () => {
  it(`User found`, () => {
    expect.assertions(1);
    return expect(getUserName(4)).resolves.toBe('Mark');
  })

  it(`User not found`, () => {
    expect.assertions(1);
    return expect(getUserName(2)).rejects.toEqual({ error: 'User with ' + 2 + ' not found.' });
  })
})