// https://leetcode.com/problems/count-binary-substrings/description/

function countBinarySubstrings(s: string): number {
    const u = {};
    let cur = '';
    let count = 0;

    let i = 0;

    while (i < s.length) {
        if (s[i] !== cur) {
            if (!u[s[i]]) {
                cur = s[i];
                u[s[i]] = 1;
                i++;
            } else {
                count += Math.min(u['0'] || 0, u['1'] || 0);
                u[s[i]] = 0;
            }
        } else {
            u[s[i]]++;
            i++;
        }
    }

    count += Math.min(u['0'] || 0, u['1'] || 0);

    return count;
};