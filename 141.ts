// https://leetcode.com/problems/linked-list-cycle/submissions/1287362481/

// 1) закидываем в мапу, где нода - ключ, и просто true значение, и проверяем, пока не дойдем до null либо до true

// 2) делаем 2 курсора, один движется со скоростью 1, второй со скоростью 2, если 2 утыкается в null - цикла нет, если 2 встречается с 1, то цикл есть

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

function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while (fast) {
        slow = slow.next;
        fast = fast.next?.next;

        if (fast === slow) {
            return true;
        }
    }

    return false;
};