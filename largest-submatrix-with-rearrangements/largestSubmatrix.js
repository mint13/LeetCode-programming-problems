/**
 * @param {number[][]} matrix
 * @return {number}
 */

 const largestSubmatrix = (matrix) => {
	let n = matrix.length
	let m = matrix[0].length
	let col = new Array(m).fill(0)
	let res = 0
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (matrix[i][j]) 
				col[j]++
			else
				col[j] = 0
		}
		res = counting(col, res)
	}
	return res
}

const counting = (column, max) => {
	let sorted = [...column].sort( (a, b) => b - a )
	let k, j
	for (let i = 0; i < sorted.length; i++) {
		if (sorted[i] === sorted[i - 1])
			continue
		
		k = j = i
		
		while (sorted[j] && sorted[j] >= sorted[i] ) 
			j++
		
		while (sorted[k] && sorted[k] >= sorted[i])
			k--
		
		max = Math.max(sorted[i] * Math.abs(k - j + 1), max)
	}

	return max
}

module.exports.largestSubmatrix = largestSubmatrix
