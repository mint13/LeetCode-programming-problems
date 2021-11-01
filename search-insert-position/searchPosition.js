/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
	const aux = (low, high) => {
		if (low > high) {
			return low
		}
		const middle = Math.floor((low + high) / 2)
		
		if (target === nums[middle]) {
			return middle
		}
		
		if (target > nums[middle]) {
			return aux(middle + 1, high)
		}
		return aux(low, middle - 1)
	}
	return aux(0, nums.length - 1)
}

module.exports.searchInsert = searchInsert
