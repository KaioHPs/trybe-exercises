const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const array = [];
    while (array.length < 10) {
      const randNum = (Math.floor(Math.random() * 50)) +1
      array.push(randNum * randNum);
    }
    const sum = array.reduce((result, num) => result + num)
    if (sum < 8000) {
      resolve(sum);
    } else {
      reject();
    }
  });

  myPromise
  .then((sum) => {
    const divisionArray = [2,3,5,10];
    return divisionArray.map((divisor) => sum/divisor );
  })
  .then((array) => array.reduce((result, num) => result + num, 0))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

fetchPromise();