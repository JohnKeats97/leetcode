// https://leetcode.com/problems/valid-anagram/submissions/1234262115/

function isAnagram(s: string, t: string): boolean {
    let count = s.length;

    const unicS = {};

    for (let i = 0; i < s.length; i++) {
        if (!unicS[s[i]]) {
            unicS[s[i]] = 1;
        } else {
            unicS[s[i]]++;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (unicS[t[i]]) {
            unicS[t[i]]--;
            count--;
        } else {
            return false;
        }
    }

    return count === 0;
};