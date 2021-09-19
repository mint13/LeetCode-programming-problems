/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (grid) => {
	let maxArea = 0;

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			maxArea = Math.max(markIsland(i, j, grid), maxArea);
		}
	}

	return maxArea;
};

const markIsland = (row, col, grid) => {
	if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] == 0) {
		return 0;
	}

	grid[row][col] = 0;
	return 1 + markIsland(row + 1, col, grid) + markIsland(row - 1, col, grid) 
    + markIsland(row, col +1, grid) + markIsland(row, col - 1, grid);
}

module.exports.maxAreaOfIsland = maxAreaOfIsland;