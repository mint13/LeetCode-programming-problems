/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = (head) => {
	const newHead = new ListNode(0)
	newHead.next = head
	let current = newHead

	while (current && current.next && current.next.next) {
    const temp = current.next
    current.next = current.next.next
    const { next } = current.next
    current.next.next = temp
    temp.next = next
    current = current.next.next
	}
	return newHead.next
}

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
	this.val = val
	this.next = null
}
