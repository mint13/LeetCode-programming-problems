/**
 * @param {number[][]} matrix
 * @return {number}
 */

 const largestSubmatrix = (matrix) => {

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
