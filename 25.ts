// https://leetcode.com/problems/reverse-nodes-in-k-group/description/

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

function reverseList(head: ListNode | null, k: number) {
    let curr = head;
    let prev = null;
    let n = 0;

    while (n < k) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;

        n++;
    }

    return prev;
};

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    // один раз запомним что вернуть
    let res = null;

    // от какого узла разворачиваем
    let cur = head;

    // последний развернутый узел, чтобы потом соединить его (он уже конец старого узла) с новым началом следующего узла
    let lastHead = null;

    while (true) {
        let last = cur;

        for (let i = 0; i < k; i++) {
            if (!cur) {
                if (lastHead) {
                    // цепляю последнюю часть, которая не будет развернута
                    lastHead.next = last;
                }

                return res;
            }

            cur = cur.next;
        }

        let r = reverseList(last, k);

        if (!res) {
            res = r;
        }

        if (lastHead) {
            // соединяю конец (бывшее начало) прошлого узла с новым началом нового узла
            lastHead.next = r;
        }

        // запоминаю новый конец действующего узла
        lastHead = last;

        last = cur;
    }
};