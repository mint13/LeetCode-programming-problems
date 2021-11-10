/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
	const len = 0
	let str = '1',
		tmp = '',
		last = '',
		count = 0

	for (let i = 1; i < n; i++) {
		tmp = ''
		last = ''
		count = 0
		len = str.length

		for (let j = 0; j < len; j++) {
			if (last === '') {
				last = str[j]
				count = 1
				continue
			}
			if (str[j] === last) {
				count += 1
			} else {
				tmp += '' + count + last
				last = str[j]
				count = 1
			}
		}

		if (last) {
			tmp += '' + count + last
		}

		str = tmp
	}

	return str
}

module.exports.countAndSay = countAndSay
