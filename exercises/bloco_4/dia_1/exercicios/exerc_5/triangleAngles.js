let angle1 = 90;
let angle2 = 30;
let angle3 = 60;

if (angle1 > 0 && angle2 > 0 && angle3 > 0) {
  if ((angle1 + angle2 + angle3) === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('Erro! Ângulo inválido.');
}