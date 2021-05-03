const validatePrize = (result, draw) => {
  const didWin = (result === draw) ? true : false;
  return didWin;
}

const drawPrize = (result, callback) => {
  const draw = Math.floor(Math.random() * 5) + 1
  console.log(draw);
  const didWin = callback(result, draw);
  const message = (didWin === true) ? 'Parabéns você ganhou!' : 'Tente novamente!';
  return message;
}

console.log(drawPrize(5, validatePrize));