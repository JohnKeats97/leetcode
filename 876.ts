// https://leetcode.com/problems/middle-of-the-linked-list/

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

function middleNode(head: ListNode | null): ListNode | null {
    let count = 0;
    let cur = head;

    // считаем длинну списка
    while (cur) {
        count++;
        cur = cur.next;
    }

    // смотрим середину
    const mid = Math.floor(count / 2) + 1;

    cur = head;
    count = 1; // так как мы изначально указываем на первый узел

    // идем к середине
    while (count !== mid) {
        count++;
        cur = cur.next;
    }

    return cur;
};