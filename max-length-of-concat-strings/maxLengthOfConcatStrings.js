/**
 * @param {string[]} arr
 * @return {number}
 */
const maxLength = function (arr) {

}

const isUnique = (s = '') => {
	const map = {}
	for (const c of s) {
		map[c] = (map[c] || 0) + 1
		if (map[c] >= 2) {
			return false
		}
	}
	return true
}
