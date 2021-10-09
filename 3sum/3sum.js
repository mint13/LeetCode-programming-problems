/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
	nums.sort((a, b) => a - b)
	const result = []
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) {
			continue
		}
		let left = i + 1
		let right = nums.length - 1
		while (left < right) {
			if (left > i + 1 && nums[left] === nums[left - 1]) {
				left += 1
				continue
			}
			const sum = nums[left] + nums[right] + nums[i]
			if (sum === 0) {
				result.push([nums[i], nums[left], nums[right]])
				left += 1
				right -= 1
				continue
			}
			if (sum > 0) {
				right -= 1
				continue
			}
			left += 1
		}
	}
	return result
}
