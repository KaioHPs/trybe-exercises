const { uppercase } = require('./Exerc_1.js');

test('Checks', (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  })
});