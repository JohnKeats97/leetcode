// https://leetcode.com/problems/merge-k-sorted-lists/description/

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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let res = new ListNode();
    let resCut = res;

    // смотрю есть ли хоть один не null
    while (lists.find((item) => item)) {
        let minIndex = 0;

        // ищу минимальный индекс, чтобы его добавить и потом дальше пустить
        for (let i = 0; i < lists.length; i++) {
            // скипаю где уже null
            if (!lists[i]) {
                continue;
            }

            // если первый элемент - null
            if (!lists[minIndex]) {
                minIndex = i;
            }

            if (lists[minIndex].val > lists[i].val) {
                minIndex = i;
            }
        }

        resCut.next = lists[minIndex];

        resCut = resCut.next;

        lists[minIndex] = lists[minIndex].next;
    }

    // так как первый элемент - пустышка
    return res.next;
};