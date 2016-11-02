function reverseWords(str) {
  var arr = str.split(' ');
  var revArr = [];
  var output;
  for (i = 0; i < arr.length; i++) {
    var temp = '';
    for (j = arr[i].length-1; j >= 0; j--) {
      temp += arr[i][j];
    }
    revArr.push(temp);
  }
  output = revArr.join(' ');
  return output;
}
