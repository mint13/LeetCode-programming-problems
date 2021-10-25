/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = (s, words) => {
	const sLen = s.length,
		wLen = words.length,
		wordLen = (words[0] || '').length

	if (!sLen || !wLen || !wordLen)
		return []

	let count = 0,
		tmp = '',
		map1 = {},
		map2 = {},
		res = []

	for (let i = 0; i < wLen; i++) {
		map1[words[i]] = (map1[words[i]] || 0) + 1
	}

	out: for (let j = 0; j <= sLen - (wLen * wordLen); j++) {
		map2 = {}
		count = 0
		while (count < wLen) {
			tmp = s.substr(j + (count * wordLen), wordLen)

			if (map1[tmp] === undefined || map1[tmp] === map2[tmp])
				continue out

			map2[tmp] = (map2[tmp] || 0) + 1
			count++
		}

		res.push(j)
	}

	return res
}

module.exports.findSubstring = findSubstringq
