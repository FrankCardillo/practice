function createPhoneNumber(numbers){

  for (var i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i].toString();
  }

  var areaCode = numbers.slice(0,3).join('');
  var middle = numbers.slice(3, 6).join('');
  var end = numbers.slice(6, 10).join('');

  return '(' + areaCode + ')' + ' ' + middle + '-' + end;
}
