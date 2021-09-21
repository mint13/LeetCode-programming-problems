/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = (board) => {
	let xLen = board.length
	let yLen = (board[0] || []).length
	
	for (let i = 0; i < xLen; i++) {
		depthFirstSearch(board, i, 0, xLen, yLen)
		depthFirstSearch(board, i, yLen - 1, xLen, yLen)
	}
	for (let j = 0; j < yLen; j++) {
		depthFirstSearch(board, 0, j, xLen, yLen)
		depthFirstSearch(board, xLen - 1, j, xLen, yLen)
	}
	for (let m = 0; m < xLen; m++) {
		for (let n = 0; n < yLen; n++) {
			if (board[m][n] === '-')
				board[m][n] = 'O'
			else if (board[m][n] === 'O')
				board[m][n] = 'X'
		}
	}
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

module.exports.surroundedRegions = solve
