function reverseStringSentence(str) {
  // empty string
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

const string = 'Hey There, It is a reverse string';

const result = reverseStringSentence(string);
console.log(result);

// Remove whitespaces form the string
console.log(result.replace(/\s/g, ''));

function reverseString(str) {
  return str.split('').reverse().join('');
}

const res = reverseString('Hello');
console.log(res);
// (function () {
//   console.log('Immediately invoked function');
// })();

function awesomeFunction() {
  var a = 2;

  var multiplyBy2 = function () {
    console.log(a * 2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
  };
  multiplyBy2();
}
