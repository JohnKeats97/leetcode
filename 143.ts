// https://leetcode.com/problems/reorder-list/

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

function reverseList(head: ListNode | null): ListNode | null {
    let curr = head;
    let prev = null;

    // просто переставляю стрелки, и список сам разворачивается 1->2->3 to 1<-2<-3

    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};

function middleNode(head: ListNode | null) {
    let count = 0;
    let cur = head;

    while (cur) {
        count++;
        cur = cur.next;
    }

    const mid = Math.floor(count / 2) + 1;

    cur = head;
    count = 1;

    while (count !== mid) {
        count++;
        cur = cur.next;
    }

    return cur;
};

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    // 1) разделяем на 2 списка посередине
    // 2) второй разворачиваем
    // 3) мержим оба списка в результирующий (первый, второй, первый, второй и тд)

    let first = head;
    const secound = middleNode(head);
    let reverseSecound = reverseList(secound);
    let flag = true; // true - первый берем
    let res = null;

    while (first && reverseSecound) {
        if (!res) {
            res = first;
            first = first.next;
            flag = !flag;

            continue;
        }

        if (flag) {
            res.next = first;
            first = first.next;
        } else {
            res.next = reverseSecound;
            reverseSecound = reverseSecound.next;
        }

        res = res.next;

        flag = !flag;
    }
};