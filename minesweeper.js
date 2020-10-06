document.addEventListener("DOMContentLoaded", startGame);

// Define your `board` object here!
var board = {}
board.cells = []
createBoard()

function createBoard () {
  var minePlacement = [true,false]
  var random = function() {return Math.floor(Math.random()*2)}

  for (var x = 0; x < 4; x ++){
    for(var y = 0; y < 4; y++){
    board.cells.push({row:x, col:y, isMine: minePlacement[random()], hidden: true})
    }
  }
}

function startGame() {
  // Don't remove this function call: it makes the game work!
  for (var i = 0; i < board.cells.length; i++) {
    //add "surroundingMines" property that equals to countSurroundingMines(board.cells[i]);
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  lib.initBoard();
  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin)
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)s
  //   lib.displayMessage('You win!')

  //for each of the cells in board
  for (var k = 0; k < board.cells.length; k++) {
    console.log("cell number: " + k)

    if (board.cells[k].isMine) {
      console.log("is a mine " + k)

      if (board.cells[k].isMarked) {
        console.log("is Marked " + k)
      } else {
        console.log("is NOT marked, therefor return " + k)
        return;
      }

    } else {
      console.log("is NOT a mine " + k)

      if (board.cells[k].hidden) {
        console.log("not all cells are revealed, there fore return" + k)
        return;
      } else {
        console.log("this cell is revealed" + k)
      }
    }
  } lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines(cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0
  // for each the surrounding cells
  for (var j = 0; j < surrounding.length; j++)
    // if isMine == true
    if (surrounding[j].isMine) {
      // add to the count
      count++
    }
  return count
}