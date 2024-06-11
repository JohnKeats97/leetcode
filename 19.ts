// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

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

// два указателя
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let prev = null;
    let cur = head;
    let secoundCur = head;

    let count = 1;

    // двигаем их одновременно, когда второй придет в конец, значит первый на своем элементе
    while (true) {
        // двигаем только второй, пока не пройдем наше расстояние
        if (count < n) {
            count++;
            secoundCur = secoundCur.next;
        } else {
            // второй на последнем элементе
            if (!secoundCur.next) {
                if (!prev) {
                    return cur.next;
                }

                prev.next = cur.next;

                return head;
            }

            prev = cur;
            cur = cur.next;
            secoundCur = secoundCur.next;
        }
        
    }
};

// за 2 прохода
// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//     let count = 0;
//     let cur = head;

//     while (cur) {
//         count++;
//         cur = cur.next;
//     }

//     let needCount = count - n + 1;
    
//     let prev = null;
//     cur = head;
//     let curCount = 1;

//     while (true) {
//         if (curCount === needCount) {
//             // элемент не первый
//             if (prev) {
//                 prev.next = cur.next;

//                 return head;
//             } else {
//                 // если первый элемент, то просто возвращаю второй
//                 return cur.next;
//             }
//         }

//         curCount++;

//         prev = cur;
//         cur = cur.next;
//     }
// };