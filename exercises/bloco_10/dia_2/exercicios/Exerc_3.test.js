const { getUserName } = require('./Exerc_2_3.js');

describe(`Checks the getUserName function using async/await`, () => {
  it(`User found`, async () => {
    expect.assertions(1);
    await expect(getUserName(4)).resolves.toBe('Mark');
  })

  it(`User not found`, async () => {
    expect.assertions(1);
    try {
      await getUserName(2)
    } catch (error) {
      expect(error).toEqual({ error: 'User with ' + 2 + ' not found.' });
    }
  })
})