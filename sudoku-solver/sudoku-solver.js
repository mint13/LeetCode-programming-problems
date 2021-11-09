/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board) => {
}
  
const isValid = (board, i, j, num) => {
	for (let k = 0; k < 9; k++) {
		if (board[i][k] === num)
			return false

		if (board[k][j] === num)
			return false

		if (board[Math.floor(i / 3) * 3 + Math.floor(k / 3)][Math.floor(j / 3) * 3 + (k % 3)] === num)
			return false
	}
	return true
}
