/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = (nums) => {

}

const swap = (arr, from, to) => {
	const tmp = arr[from]
	arr[from] = arr[to]
	arr[to] = tmp
}

const reverse = (arr, start, end) => {
	while (start < end) {
		swap(arr, start, end)
		start++
		end--
	}
}
