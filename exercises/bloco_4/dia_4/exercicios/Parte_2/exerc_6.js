function sumFunction(num) {
  let sum = 0;
  for (let i = 0; i <= num; i+=1) {
    sum += i;
  }
  return sum;
}

finalValue = sumFunction(5);
console.log(finalValue);