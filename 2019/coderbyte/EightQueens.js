// Have the function EightQueens(strArr) read strArr which will be an array consisting of the locations of eight Queens 
// on a standard 8x8 chess board with no other pieces on the board. The structure of strArr will be the following: 
// ["(x,y)", "(x,y)", ...] where (x,y) represents the position of the current queen on the chessboard 
// (x and y will both range from 1 to 8 where 1,1 is the bottom-left of the chessboard and 8,8 is the top-right). 
// Your program should determine if all of the queens are placed in such a way where none of them are attacking each other. 
// If this is true for the given input, return the string true otherwise return the first queen in the 
// list that is attacking another piece in the same format it was provided. 

// For example: if strArr is ["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"] 
// then your program should return the string true.

function EightQueens(strArr) { 
  let arrSlice = [];
  for (let i = 0; i < strArr.length; i++) {
    arrSlice = strArr.slice(i);
    if (checkHorizontals(strArr[i], arrSlice)) {
      return strArr[i];
    }
    if (checkVerticals(strArr[i], arrSlice)) {
      return strArr[i];
    }
    if (checkDiagonals(strArr[i], arrSlice)) {
      return strArr[i];
    }
  }
  
  return 'true';
}
  
function checkHorizontals(queen, board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][1] === queen[1]) {
      return true;
    }
  }
  return false;
}

function checkVerticals(queen, board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][3] === queen[3]) {
      return true;
    }
  }
  return false;
}

function checkDiagonals(queen, board) {
  let diagonals = calculateAllDiagonals(queen);
  for (let i = 0; i < board.length; i++) {
    if (diagonals.includes(board[i])) {
      return true;
    }
  }
  return false;
}

function calculateAllDiagonals(queen) {
  let diagonals = [];
  let x = parseInt(queen[1], 10);
  let y = parseInt(queen[3], 10);
  calculateUpRightDiagonals(queen, x, y, diagonals);
  calculateDownRightDiagonals(queen, x, y, diagonals);
  calculateUpLeftDiagonals(queen, x, y, diagonals);
  calculateDownLeftDiagonals(queen, x, y, diagonals);
  return diagonals;
}

function calculateUpRightDiagonals(queen, x, y, diagonals) {
  while (x < 7 && y < 7) {
    x += 1;
    y += 1;
    diagonals.push(constructDiagonalCell(x, y));
  }
}

function calculateDownLeftDiagonals(queen, x, y, diagonals) {
  while (x > 0 && y > 0) {
    x -= 1;
    y -= 1;
    diagonals.push(constructDiagonalCell(x, y));
  }
}


function calculateDownRightDiagonals(queen, x, y, diagonals) {
  while (x < 7 && y > 0) {
    x += 1;
    y -= 1;
    diagonals.push(constructDiagonalCell(x, y));
  }
}

function calculateUpLeftDiagonals(queen, x, y, diagonals) {
  while (x > 0 && y < 7) {
    x -= 1;
    y += 1;
    diagonals.push(constructDiagonalCell(x, y));
  }
}

function constructDiagonalCell(x, y) {
  return '(' + x.toString() + ',' + y.toString() + ')';
}