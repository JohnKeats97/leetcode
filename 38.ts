// https://leetcode.com/problems/count-and-say/description/

function RLE(s: string): string {
    let res = '';

    let count = 1;
    let cur = s[0];

    for (let i = 1; i < s.length; i++) {
        if (s[i] === cur) {
            count++;
        }  else {
            res += `${count}${cur}`;
            count = 1;
            cur = s[i];
        }
    }

    res += `${count}${cur}`;

    return res;
}

function countAndSay(n: number): string {
    let res = '1';

    for(let i = 1; i < n; i++) {
        res = RLE(res);
    }

    return res;
};