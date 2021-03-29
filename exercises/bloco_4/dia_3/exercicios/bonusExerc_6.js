let num = 2;
let dividers = 0;

for (let i = 2; i < num; i+=1) {
  if (num%i===0) {
    dividers+=1;
  } 
}

if (dividers===0) {
  console.log('O número ' + num + ' é primo.');
} else {
  console.log('O número ' + num + ' não é primo.');
}