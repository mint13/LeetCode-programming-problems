/**
 * @param {string} s
 * @return {number}
 */
 const longestValidParentheses = (s = '') => {
	const stack = [-1]
	let max = 0
	for (let i = 0; i < s.length; i++) {
		if (s[stack[stack.length - 1]] === '(' && s[i] === ')') {
			stack.pop()
		} else {
			max = Math.max(max, i - stack[stack.length - 1] - 1)
			stack.push(i)
		}
	}

	return Math.max(max, s.length - stack[stack.length - 1] - 1)
}

module.exports.longestValidParentheses = longestValidParentheses
