let percentage = 100;

if (percentage>=90 && percentage<=100) {
  console.log('A');
} else if (percentage>=80 && percentage<90) {
  console.log('B');
} else if (percentage>=70 && percentage<80) {
  console.log('C');
} else if (percentage>=60 && percentage<70) {
  console.log('D');
} else if (percentage>=50 && percentage<60) {
  console.log('E');
} else if (percentage<50 && percentage>=0) {
  console.log('F');
} else {
  console.log('Error! Invalid percentage.')
}