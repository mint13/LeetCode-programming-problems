/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
	if (!l1 || !l2)
		return l1 || l2
	
	return l1.val < l2.val ? linkThem(l1,l2) : linkThem(l2,l1)
}

const linkThem = (smaller, greater) => {
	smaller.next = mergeTwoLists(smaller.next, greater)
	return smaller
}
