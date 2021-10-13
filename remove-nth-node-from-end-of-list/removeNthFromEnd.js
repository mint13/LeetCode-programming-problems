/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
	let h1 = head
	let h2 = null
	let count = 0

	while (h1) {
		count += 1
		h1 = h1.next
		if (h2) {
			h2 = h2.next
		}
		if (count === n + 1) {
			h2 = head
		}
	}

	if (!h2) {
		return head ? head.next : null
	}
	
	h2.next = h2.next.next
	return head
}

module.exports.removeNthFromEnd = removeNthFromEnd
