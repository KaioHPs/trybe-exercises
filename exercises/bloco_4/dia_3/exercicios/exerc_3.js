let n = 5;

for (let i = 0; i < n; i+=1) {
  let line = '';
  for (let i2 = n-1; i2 > i; i2-=1) {
    line += ' ';
  }
  for (let i3 = 0; i3 <= i; i3+=1) {
    line += '*';
  }
  console.log(line);
}