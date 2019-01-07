function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return [];
  }
  var minVal = Math.min(...numbers);
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === minVal) {
      numbers.splice(i, 1);
      return numbers;
    }
  }
}
