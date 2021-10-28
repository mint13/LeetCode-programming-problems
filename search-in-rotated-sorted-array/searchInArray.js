/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
	const len = nums.length
	let left = 0,
		right = len - 1,
		mid = 0

	while (left <= right) {
		mid = left + Math.floor((right - left) / 2)

		if (nums[mid] === target)
			return
			
		if (nums[mid] > nums[right]) {
			if (nums[left] <= target && target < nums[mid]) {
				right = mid - 1
			} else {
				left = mid + 1
			}
		} else {
			if (nums[mid] < target && target <= nums[right]) {
				left = mid + 1
			} else {
				right = mid - 1
			}
		}
	}

	return -1
}

module.exports.searchInArray = search
