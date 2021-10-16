/**
 * @param {number} n
 * @return {string[]}
 */
const generateParentheses = (n) => {
  const result = []
  const aux = (current, left, right) => {
    if (left === n && right === n) {
      result.push(current)
      return
    }
    if (left < right || left > n || right > n) {
      return
    }
    aux(`${current}(`, left + 1, right)
    aux(`${current})`, left, right + 1)
  }
  aux('', 0, 0)
  return result
}

module.exports.generateParentheses = generateParentheses
