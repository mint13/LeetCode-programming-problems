/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
	const nums = merge(nums1, nums2)
	const middle = Math.floor((nums.length-1) / 2)

	return (middle * 2 === (nums.length-1)) ?  nums[middle] : ((nums[middle] + nums[middle + 1]) / 2) 
}

const merge = (xs1, xs2) => {
	if (!xs1 || !xs1.length) {
		return xs2
	}
	if (!xs2 || !xs2.length) {
		return xs1
	}
	const [hd1, ...rest1] = xs1
	const [hd2, ...rest2] = xs2
	return hd1 <= hd2 ? [hd1, ...merge(rest1, xs2)] : [hd2, ...merge(xs1, rest2)]
}
