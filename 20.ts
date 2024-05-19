// https://leetcode.com/problems/valid-parentheses/description/

const obj = {
    ')': '(',
    '}': '{',
    ']': '[',
}

function isValid(s: string): boolean {
    const stack = [];

    let i = 0;

    while (i < s.length) {
        const openForCliseI = obj[s[i]];

        if (!openForCliseI) {
            stack.push(s[i]);
            i++;

            continue;
        }

        if (openForCliseI !== stack.pop()) {
            return false;
        }

        i++;
    }

    return stack.length === 0;
};