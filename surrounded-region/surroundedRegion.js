/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = (board) => {

}

const depthFirstSearch = (board, x, y, xLen, yLen) => {
  if (x >= 0 && y >= 0 && x < xLen && y < yLen && board[x][y] === 'O') {
    board[x][y] = '-'
    depthFirstSearch(board, x + 1, y, xLen, yLen)
    depthFirstSearch(board, x - 1, y, xLen, yLen)
    depthFirstSearch(board, x, y + 1, xLen, yLen)
    depthFirstSearch(board, x, y - 1, xLen, yLen)
  }
}
