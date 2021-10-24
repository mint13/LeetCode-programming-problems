/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
	if (needle.length === 0)
		return 0

	if (needle === haystack)
		return 0

	for (let i = 0; i <= haystack.length - needle.length; i++) {
		if (needle === haystack.substring(i, i + needle.length)) {
			return i
		}
	}

	return -1
}

module.exports.strStr = strStr
