let num1 = 3;
let num2 = 2;
let num3 = 1;

if(num1>num2 && num1>num3){
  console.log(num1);
} else if(num2>num1 && num2>num3){
  console.log(num2);
} else if(num3>num1 && num3>num2){
  console.log(num3);
} else {
  console.log('Os três valores são iguais.');
}