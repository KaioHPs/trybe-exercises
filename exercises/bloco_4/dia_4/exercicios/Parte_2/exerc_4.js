let arrayTest = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function indexOfTheBiggest(array) {
  let index = 0;
  for (let i = 0; i < array.length; i+=1) {
    if (array[i].length>array[index].length) {
      index = i;
    }
  }
  let name = array[index];
  return name; 
}

biggestName = indexOfTheBiggest(arrayTest);
console.log(biggestName);