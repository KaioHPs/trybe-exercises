let n = 5;

for (let i = 0; i < n; i+=1) {
  let line = '';
  for (let i2 = 0; i2 <= i; i2+=1) {
    line += '*';
  }
  console.log(line);
}