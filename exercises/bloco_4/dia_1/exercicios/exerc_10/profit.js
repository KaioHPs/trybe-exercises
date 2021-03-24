let cost = 20, sellPrice = 45;

if (cost>=0 && sellPrice>=0) {
  console.log(1000 * (sellPrice - (cost + (cost * 0.2))))
} else {
  console.log('Error. Invalid value.')
}