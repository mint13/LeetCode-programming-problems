/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = (s) => {
	// if string input is empty or not a string, return 0
	if (!!!s.length || typeof s !== 'string') 
		return 0
	
	// if the length is 1, return 1
	if (s.length  == 1)
		return 1

	let hashTable = {} // hashTable to hold the characters and index;
	let longestSubstringLength = 0 // length of longest substring
	let start = 0 // start index
	const length = s.length // length of the array.

	// convert our strings to an array
	const strings = s.split('')

	return longestSubstringLength
}
