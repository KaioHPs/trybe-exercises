function isItTheEnding(word, ending) {
  trueEnding = '';
  for (let i = word.length - ending.length; i < word.length; i+=1) {
    trueEnding += word[i];
  }
  console.log(trueEnding);
  if (ending === trueEnding) {
    return true;
  } else {
    return false;
  }
}

check1 = isItTheEnding('trybe', 'be');
console.log(check1);
check2 = isItTheEnding('joaofernando', 'fernan');
console.log(check2);