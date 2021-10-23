/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 const removeElement = function (nums, val) {
	let left = 0
	const swap = (a, b) => {
		const temp = nums[a]
		nums[a] = nums[b]
		nums[b] = temp
	}
	while (left <= nums.length - 1) {
		while (nums[nums.length - 1] === val) {
			nums.pop()
		}
		while (nums[left] !== val && left <= nums.length - 1) {
			left += 1
		}

		if (left < nums.length - 1) {
			swap(left, nums.length - 1)
			left += 1
			nums.pop()
		}
	}
	return nums.length
}
