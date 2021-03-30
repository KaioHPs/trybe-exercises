let arrayTest = [2, 3, 2, 5, 8, 2, 3];

function moreDuplicates(array) {
  let moreTimes = 0;
  let moreRepeated = 0;
  for (let i = 0; i < array.length; i+=1) {
    let repeatTimes = 0;
    for (let i2 = 0; i2 < array.length; i2+=1) {
      if (array[i2]===array[i]) {
        repeatTimes += 1;
      }  
    }
    if (repeatTimes>moreTimes) {
      moreTimes = repeatTimes;
      moreRepeated = array[i]
    }
  }
  return moreRepeated
}

finalValue = moreDuplicates(arrayTest);
console.log(finalValue);