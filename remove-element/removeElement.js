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
}
