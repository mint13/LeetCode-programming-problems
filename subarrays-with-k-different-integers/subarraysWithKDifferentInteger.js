/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const subarraysWithKDistinct = (A, K) => {
	const atMost = (count) => {
		const map = {}
		let left = 0
		let distinct = 0
		let result = 0
		for (let right = 0; right < A.length; right++) {
			const num = A[right]
			map[num] = (map[num] || 0) + 1

			if (map[num] === 1) {
				distinct += 1
			}
			while (distinct > count) {
				map[A[left]] -= 1
				if (map[A[left]] === 0) {
					distinct -= 1
				}

				left += 1
			}
			result += right - left + 1
		}
		return result
	}
	return atMost(K) - atMost(K - 1)
}
