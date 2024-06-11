// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let res = new ListNode(0, null); // пустой 0, потому его удалим
    let curRes = res;

    let cur1 = l1;
    let cur2 = l2;

    let ost = 0; // + к след числу

    while (cur1 || cur2 || ost) {
        let val = (cur1?.val || 0) + (cur2?.val || 0) + ost; // сумма

        ost = Math.floor(val / 10); // переносим на след

        curRes.next = new ListNode(val % 10, null); // формируем эту ноду с числом
        curRes = curRes.next;

        cur1 = cur1?.next || null;
        cur2 = cur2?.next || null;
    }

    return res.next; // пропускаем первый пустой 0
};