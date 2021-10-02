/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  return ( x < 0 ? -1 : 1 ) * + ("" + Math.abs(x)).split``.reverse().join``
}
