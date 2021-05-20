const { uppercase } = require('./Exerc_1.js');

test('Checks the uppercase function', (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  })
});