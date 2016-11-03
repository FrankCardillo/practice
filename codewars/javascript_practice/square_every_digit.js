function squareDigits(num){
  var strNum = num.toString().split('');
  var outputStr = '';
  for (var i = 0; i < strNum.length; i++) {
    var squared = Math.pow(parseInt(strNum[i]), 2).toString();
    outputStr += squared;
  }
  return parseInt(outputStr);
}
