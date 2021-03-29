function verifyPalindrome(string){
  let reverseString = '';
  for (let i = string.length-1; i >=0; i-=1) {
    reverseString += string[i];
  }
  console.log(reverseString);
  if (reverseString === string) {
    return true;
  } else {
    return false;
  }
}

let isPalindrome = verifyPalindrome('arara');
console.log(isPalindrome);
let isPalindrome2 = verifyPalindrome('desenvolvimento');
console.log(isPalindrome2);