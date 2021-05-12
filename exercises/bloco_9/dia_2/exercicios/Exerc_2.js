const promise = new Promise((resolve, reject) => {
  const array = [];
  while (array.length < 10) {
    const randNum = (Math.floor(Math.random() * 50)) +1
    array.push(randNum * randNum);
  }
  const sum = array.reduce((result, num) => result + num)
  if (sum < 8000) {
    resolve();
  } else {
    reject();
  }
})
.then(() => console.log('Promise resolvida'))
.catch(() => console.log('Promise rejeitada'));