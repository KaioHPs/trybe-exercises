let n = 7;

for (let i = 0; i < n; i+=2) {
  let line = '';
  if (i===0||i===n-1) {
    for (let i2 = n-2; i2 > i; i2-=2) {
      line += ' ';
    }
    for (let i3 = 0; i3 <= i; i3+=1) {
      line += '*';
    }
  } else {
    for (let i2 = n-2; i2 > i; i2-=2) {
      line += ' ';
    }
    line += '*';
    for (let i3 = 1; i3 < i; i3+=1) {
      line += ' ';
    }
    line += '*';
  }
  console.log(line);
}