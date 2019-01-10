// Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in 
// the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the 
// array will always be at least 2.
// The array will always contain letters in only one case.

function findMissingLetter(lettersArray) {
    const fullAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const firstLetter = fullAlphabet.indexOf(lettersArray[0].toLowerCase());
    const lastLetter = fullAlphabet.indexOf(lettersArray[lettersArray.length-1].toLowerCase()) + 1;
    const subAlphabetAllLetters = fullAlphabet.slice(firstLetter, lastLetter);
    let isUpperCase = false;
    let lettersArrayLowerCase = lettersArray;
    
    if (lettersArray[0] === lettersArray[0].toUpperCase()) {
      isUpperCase = true;
    }
    
    if (isUpperCase) {
      lettersArrayLowerCase = lettersArray.map((letter) => letter.toLowerCase());
    }
      
    const missingLetter = subAlphabetAllLetters.filter((letter) => {
      return lettersArrayLowerCase.indexOf(letter) === -1;
    });
    
    for (let i = 0; i < subAlphabetAllLetters.length; i++) {
      if (lettersArrayLowerCase.indexOf(subAlphabetAllLetters[i]) === -1) {
        if (isUpperCase) {
          return subAlphabetAllLetters[i].toUpperCase();
        }
        return subAlphabetAllLetters[i];
      }
    }
}