let arrayTest = [2, 3, 6, 7, 10, 1];

function indexOfTheBiggest(array) {
  let index = 0;
  for (let i = 0; i < array.length; i+=1) {
    if (array[i]>array[index]) {
      index = i;
    }
  }
 return index; 
}

biggestIndex = indexOfTheBiggest(arrayTest);
console.log(biggestIndex);