let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersByNext = [];

for (let i = 0; i < numbers.length; i+=1) {
  if (numbers[i + 1] != undefined) {
    numbersByNext[i] = numbers[i] * numbers[i+1];
  } else {
    numbersByNext[i] = numbers[i] * 2;
  }
}

console.log(numbersByNext);