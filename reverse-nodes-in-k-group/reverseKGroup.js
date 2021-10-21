/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 const reverseKGroup = (head, k) => {

}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 const reverseKGroup = (head, k) => {

}

const reverse = (node, k) => {
	let count = 1
	let current = node
	let next = null
	let newHead = null

	while (count <= k && current) {
		newHead = current
		const temp = current.next
		current.next = next
		next = current
		current = temp
		count += 1
	}
	node.next = current
	return [newHead, node]
}

const getLength = (node) => {
	let length = 0
	let current = node
	while (current) {
		length += 1
		current = current.next
	}
	return length
} 

const getLength = (node) => {
	let length = 0
	let current = node
	while (current) {
		length += 1
		current = current.next
	}
	return length
}
