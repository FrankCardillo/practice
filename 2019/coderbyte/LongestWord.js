// Challenge

// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
// If there are two or more words that are the same length, return the first word from the string with that length. 
// Ignore punctuation and assume sen will not be empty. 

function LongestWord(sen) {
    sen = sen.split(' ').map((elem) => {
      return elem.replace(/\W/g, '');
    }).sort((a, b) => {
      return a.length - b.length;
    });

    return sen[sen.length-1];         
}
     
  // keep this function call here
  LongestWord(readline());  