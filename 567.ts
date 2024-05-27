// https://leetcode.com/problems/permutation-in-string/description/

function checkInclusion(s1: string, s2: string): boolean {
    const u1 = {
    "a": 0,
    "b": 0,
    "c": 0,
    "d": 0,
    "e": 0,
    "f": 0,
    "g": 0,
    "h": 0,
    "i": 0,
    "j": 0,
    "k": 0,
    "l": 0,
    "m": 0,
    "n": 0,
    "o": 0,
    "p": 0,
    "q": 0,
    "r": 0,
    "s": 0,
    "t": 0,
    "u": 0,
    "v": 0,
    "w": 0,
    "x": 0,
    "y": 0,
    "z": 0
}
    const u2 = {...u1};
    const l1 = s1.length;

    for (let i = 0; i < s1.length; i++) {
        u1[s1[i]]++;
    }

    const js1 = JSON.stringify(u1);

    for (let i = 0; i < s2.length; i++) {
        if (i < l1) {
            u2[s2[i]]++;

            if (js1 === JSON.stringify(u2)) {
                return true;
            }

            continue;
        }

        u2[s2[i]]++;

        u2[s2[i - l1]]--;

        const js2 = JSON.stringify(u2);

        if (js1 === js2) {
            return true;
        }
    }

    return false;
};