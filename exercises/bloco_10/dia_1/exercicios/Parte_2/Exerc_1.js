let vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelNumbers = ['1', '2', '3', '4', '5'];

function encode(string) {
  // seu código aqui
  let changedString = '';
  [...string].forEach((letter) => {
    const isVowel = vowels.includes(letter);
    if (isVowel) changedString += vowelNumbers[vowels.indexOf(letter)]
    else changedString += letter;
  });
  return changedString;
}

function decode(string) {
  // seu código aqui
  let changedString = '';
  [...string].forEach((character) => {
    const isNum = vowelNumbers.includes(character);
    if (isNum) changedString += vowels[vowelNumbers.indexOf(character)]
    else changedString += character;
  });
  return changedString;
}

module.exports = {
  encode,
  decode,
};