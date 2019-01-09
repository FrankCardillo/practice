// Write a function

// tripledouble(num1,num2)
// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place
// in num1 and also a straight double of the same number in num2.

// If this isn't the case, return 0

// Examples
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

let theTriple = null;
let theDouble = null;

function tripledouble(num1, num2) {
  const numOneArr = num1.toString().split('');
  const numTwoArr = num2.toString().split('');
  const numOneMatches = findNumber(numOneArr, true);
  const numTwoMatches = findNumber(numTwoArr, false);
  if (!numOneMatches.length || !numTwoMatches.length) {
    return 0;
  }
  
  for (let i = 0; i < numOneMatches.length; i++) {
    if (numTwoMatches.indexOf(numOneMatches[i]) > -1) {
      return 1;
    }
  }
  return 0;
}

function findNumber(numArr, findTriple) {
  let matches = [];
  for (let i = 0; i < numArr.length; i++) {
    if (findTriple) {
      if (numArr[i+1] && numArr[i+2] && numArr[i] === numArr[i+1] && numArr[i] === numArr[i+2]) {
        matches.push(numArr[i]);
      }
    } else {
      if (numArr[i+1] && numArr[i] === numArr[i+1]) {
        matches.push(numArr[i]);
      }
    }
  }
  return matches;
}