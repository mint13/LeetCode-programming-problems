/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 const convert = (s, numRows) => {
	if (numRows === 1) {
		return s
	}
	const arr = new Array(numRows).fill("")
	let i = 0
	let down = true
	for (const c of s) {
		arr[i] += c
		if (down) {
			i += 1
			if (i === numRows - 1) {
				down = false
			}
			continue
		}

		i -= 1
		if (i === 0) {
			down = true
		}
	}
	return arr.join('')
}
