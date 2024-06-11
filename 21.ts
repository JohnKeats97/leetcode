// https://leetcode.com/problems/merge-two-sorted-lists/

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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let cur1 = list1;
    let cur2 = list2;
    let curRes = null;
    let head = null;

    while (cur1 && cur2) {
        // выбираем меньший и ставим его
        if (cur2.val > cur1.val) {
            // если нет начала, то ставим его
            if (!head) {
                head = cur1;
                curRes = cur1;
            } else {
                curRes.next = cur1;
                curRes = curRes.next;
            }

            cur1 = cur1.next;
        } else {
            if (!head) {
                head = cur2;
                curRes = cur2;
            } else {
                curRes.next = cur2;
                curRes = curRes.next;
            }

            cur2 = cur2.next;
        }
    }

    if (cur1) {
        if (head) {
            curRes.next = cur1;
        } else {
            head = cur1;
        }
    }

    if (cur2) {
        if (head) {
            curRes.next = cur2;
        } else {
            head = cur2;
        }
    }

    return head;
};