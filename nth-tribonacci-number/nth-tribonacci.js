/**
 * @param {number} n
 * @return {number}
 */

const tribonacci = (n) => { 
	// You first want to state the begining 
	let a = 0, b = 1, c = 1
    
	// Repeat for n times 
	for (let i = 0; i < n; i++) { 
		// Set temporary variable to use later 
		let temp = c 
		// set a, b, and c to next items in sequence a -> b b -> c c-> a + b + c 
		c = a + b + c 
		a = b 
		b = temp
	} 
	return a // return the end
}
