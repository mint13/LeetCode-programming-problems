/**
 * @param {string[]} arr
 * @return {number}
 */
const maxLength = function (arr) {
  let max = 0
 
  const aux = (index, current = '') => {
    if (index > arr.length - 1) {
      max = Math.max(current.length, max)
      return
    }
    if (isUnique(current)) {
      aux(index + 1, current)
      if (isUnique(current + arr[index])) {
        aux(index + 1, current + arr[index])
      }
    }
  }
  aux(0)
  return max
}

const isUnique = (s = '') => {
	const map = {}
	for (const c of s) {
		map[c] = (map[c] || 0) + 1
		if (map[c] >= 2) {
			return false
		}
	}
	return true
}
