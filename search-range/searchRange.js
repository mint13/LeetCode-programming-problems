/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {

}

const find = (nums, target, findLeft) => {
	let left = 0,
		right = nums.length - 1,
		mid = 0

	while (left <= right) {
		mid = Math.floor((left + right) / 2)
		if (nums[mid] > target || (findLeft && nums[mid] === target)) {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return findLeft ? left : right
}
