/**
 * @param {string} s
 * @return {string}
 */
 
const longestPalindrome = (s) => {

}

const expandAroundCenter = (s, leftIdx, rightIdx) => {
	while (leftIdx >= 0 && rightIdx < s.length) {
		if (s[leftIdx] !== s[rightIdx])
			break
		
		leftIdx--
		rightIdx++
	}
	return [leftIdx + 1, rightIdx] 
}
