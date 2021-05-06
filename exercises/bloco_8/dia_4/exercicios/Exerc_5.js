const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((finalResult, elementName) =>
  finalResult + elementName.toLowerCase().split('').reduce((result, letter) => {
      if (letter === 'a') return result + 1;
      return result;
    }, 0), 0)
}

assert.deepStrictEqual(containsA(), 20);