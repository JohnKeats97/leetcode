// https://leetcode.com/problems/generate-parentheses/description/

function generateParenthesis(n: number): string[] {
    const res = [];

    // строка, оставшиеся откр строки, оставшиеся закр строки
    const stack: [[string, number, number]] = [['(', n - 1, n]];

    while (stack.length) {
        const cur = stack.pop();

        // закончились закр скобки
        if (cur[2] === 0) {
            res.push(cur[0]);

            continue;
        }

        // если есть откр скобка, добавляем ее
        if (cur[1]) {
            stack.push([cur[0] + '(', cur[1] - 1, cur[2]])
        }

        // если закрывающихся скобок больше - ставим закрывающуюся скобку, если поставим на меньше меньше, то будет ())
        if (cur[2] > cur[1]) {
            stack.push([cur[0] + ')', cur[1], cur[2] - 1])
        }
    }

    return res;
};

