// https://leetcode.com/problems/copy-list-with-random-pointer

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

// иду по списку и создаю последующий элемент - копия предыдущего
// иду по списку и проставляю рандом как рандом оригинала + 1
function copyRandomList(head: _Node | null): _Node | null {
    let cur = head;

    // создаю второй скопированный элемент следом за оригинальным 1 -> 2 to 1 -> 1' -> 2 -> 2'
    while (cur) {
        const copy = new Node(cur.val, cur.next, cur.random);

        const next = cur.next

        cur.next = copy;

        cur = next;
    }

    cur = head?.next || null;

    // перенашу рандомы на скопированных (в начале нужно перенести рандомы, чтобы не перемешались с оригиналами)
    while (cur) {
        cur.random = cur.random?.next || null;

        cur = cur.next?.next || null;
    }

    const res = head?.next || null;

    let curOriginal = head;
    let curCopy = res;

    // переношу next на скопированном
    // переношу next на оригинальном
    while (curCopy && curOriginal) {
        curOriginal.next = curCopy.next;

        curOriginal = curOriginal.next;

        curCopy.next = curCopy.next?.next || null;

        curCopy = curCopy.next;
    }

    return res;
};