// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

function lengthOfLongestSubstring(s: string): number {
    const u = {};
    let max = 0;
    let i = 0;
    let j = 0;

    while (j < s.length) {
        const cur = u[s[j]];

        if (cur === undefined) {
            u[s[j]] = j;

            j++;
        } else {
            max = Math.max(max, j - i);

            // если эта буква идет раньше i то не меняет, например abbA - тут А переставит i к первой а
            if (i <= u[s[j]]) {
                i = u[s[j]] + 1;
            }

            u[s[j]] = undefined;
        }
    }

    max = Math.max(max, j - i);

    return max;
}