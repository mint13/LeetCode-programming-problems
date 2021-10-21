/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 const reverseKGroup = (head, k) => {

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
