let n = 5;

for (let i = 0; i < n; i+=2) {
  let line = '';
  for (let i2 = n-2; i2 > i; i2-=2) {
    line += ' ';
  }
  for (let i3 = 0; i3 <= i; i3+=1) {
    line += '*';
  }
  console.log(line);
}