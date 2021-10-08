/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
	const table = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	}
	
	let result = 0
	for (let i = 0; i < s.length; i++) {
		if (table[s[i]] < table[s[i + 1]]) { // if the next roman numeral is larger, then we know we have to subtract this number
			result -= table[s[i]]
			continue
		} 
		result += table[s[i]]
	}
	return result
}

module.exports.romanToInt = romanToInt
