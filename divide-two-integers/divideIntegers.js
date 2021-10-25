/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = (dividend, divisor) => {
	const dis = Math.abs(divisor),
		sign = (divisor > 0 && dividend > 0) || (divisor < 0 && dividend < 0),
		arr = [dis]
	let did = Math.abs(dividend),
		res = 0

	if (dividend === 0 || did < dis)
		return 0

	if (divisor === -1 && dividend === -2147483648)
		return 2147483647

	if (dis === 1)
		return divisor > 0 ? dividend : -dividend

	while (arr[arr.length - 1] < did) 
		arr.push(arr[arr.length - 1] + arr[arr.length - 1])

	for (let i = arr.length - 1; i >= 0; i--) {
		if (did >= arr[i]) {
			did -= arr[i]
			res += i === 0 ? 1 : 2 << (i - 1)
		}
	}

	return sign ? res : -res
}
