let arrayTest = [2, 4, 6, 7, 10, 0, -3];

function indexOfTheSmallest(array) {
  let index = 0;
  for (let i = 0; i < array.length; i+=1) {
    if (array[i]<array[index]) {
      index = i;
    }
  }
 return index; 
}

smallestIndex = indexOfTheSmallest(arrayTest);
console.log(smallestIndex);