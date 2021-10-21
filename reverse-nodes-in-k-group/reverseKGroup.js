/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 const reverseKGroup = (head, k) => {
	const times = Math.floor(getLength(head) / k)
	let newHead = null
	let current = head
	let tail = null
	for (let i = 1; i <= times; i++) {
		const [partHead, partTail] = reverse(current, k)
		if (!newHead) {
			newHead = partHead
		}
		if (tail) {
			tail.next = partHead
		}
		tail = partTail
		current = partTail.next
	}
	return newHead || head
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

module.exports.reverseKGroup = reverseKGroup
