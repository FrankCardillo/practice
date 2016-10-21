var isSquare = function(n){
  if (n < 0) {
    return false;
  }

  var root = Math.sqrt(n);
  var stringRoot = root.toString();

  if (stringRoot.includes('.')) {
    return false;
  }
  else {
    return true;
  }
}
