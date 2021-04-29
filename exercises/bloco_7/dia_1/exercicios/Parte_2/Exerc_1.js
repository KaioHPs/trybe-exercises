// function calculateNumberFactorial(number) {
//   let factorial = 1;
//   if (number === 0) {
//     return 1;
//   } else if(number < 0) throw new Error('Número precisa ser maior que 0.');
//   for (let index = 1; index <= number; index += 1) {
//     factorial *= index;  
//   }
//   return factorial;
// }

// console.log(calculateNumberFactorial(0));
// console.log(calculateNumberFactorial(4));

const factorial = (number) => {
  const calculateNumberFactorial = num => {
    let resp = num;
    while (num > 2) {
        resp *= --num;
    }
    return resp;
  }
  const factorial = number === 0 ? 1 : calculateNumberFactorial(number);
  return factorial;
};

console.log(factorial(0));
console.log(factorial(4));