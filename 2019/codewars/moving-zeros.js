// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
    let zeroCount = 0;
    let zeroSortedArr = arr.filter((element) => {
      if (element === 0) {
        zeroCount++;
      }
      return element !== 0;
    })
    
    for (let i = 0; i < zeroCount; i++) {
      zeroSortedArr.push(0);
    }
    return zeroSortedArr;
}