// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

function evalRPN(tokens: string[]): number {
    const z = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => {
            if(a/b>=0)
                return Math.floor(a/b);
            else
                return Math.ceil(a/b);
        },
    }

    const stack = [];

    for (let i = 0; i < tokens.length; i++) {
        const f = z[tokens[i]];

        if (f) {
            const b = Number(stack.pop());
            const a = Number(stack.pop());

            stack.push(f(a,b));
        } else {
            stack.push(tokens[i]);
        }
    }

    return stack.pop();
};