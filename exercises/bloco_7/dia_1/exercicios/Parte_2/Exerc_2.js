const longestWord = (string) => {
  const stringArray = string.split(' ');
  stringArray.sort((a,b) => b.length - a.length);
  return stringArray[0];
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));  // retorna 'aconteceu'