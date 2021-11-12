/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
	const result = []
	const aux = (start, current=[], sum = 0) => {
			if (sum > target) {
					return 
			}
			
			if (sum === target) {
					result.push(current)
					return
			}

			for (let i = start; i < candidates.length; i++) {
				aux(i, [...current, candidates[i]], sum + candidates[i])
			}
	}

	for (let i = 0; i <  candidates.length; i++) {
		aux(i, [candidates[i]], candidates[i])
	}
	return result
}
