// https://leetcode.com/problems/climbing-stairs/submissions/1290453014/

// i шаг можно шагнуть или с i - 1 или с i - 2, поэтому к-во способов для i = к-во i-1 + i-2

function climbStairs(n: number): number {
    const steps = [1, 2];

    for (let i = 2; i < n; i++) {
        steps[i] = steps[i - 1] + steps[i - 2];
    }

    return steps[n - 1];
};
