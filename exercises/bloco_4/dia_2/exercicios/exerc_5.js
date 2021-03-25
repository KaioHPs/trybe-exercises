let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let biggestNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i]>biggestNumber) {
    biggestNumber = numbers[i];
  } 
}

console.log(biggestNumber);