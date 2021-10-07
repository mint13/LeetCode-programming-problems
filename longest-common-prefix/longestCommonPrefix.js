/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
	if (strs.length === 0)
		return ''
	
	const len1 = strs.length, len2 = strs[0].length
	let tmp = '', res = ''

	outer: for (var i = 0; i < len2; i++) {
		tmp = strs[0][i]
		for (var j = 1; j < len1; j++) {
			if (strs[j][i] !== tmp)
				break outer
		}
		res += tmp
	}
	return res
}

module.exports.longestCommonPrefix = longestCommonPrefix
