// https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/

function countUniqueChars(s: string, f: number, l: number): number {
    const u = {};
    
    for (let i = f; i <= l; i++) {
        if (u[s[i]]) {
            u[s[i]] = u[s[i]] + 1;
        } else {
            u[s[i]] = 1;
        }
    }

    let count = 0;

    Object.keys(u).forEach((key) => {
        if (u[key] === 1) {
            count++;
        }
    });

    return count;
}

function uniqueLetterString(s: string): number {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        const u = {};
        let pCount = 0;

        // ситаем каждый раз полным перебором, А -> AB -> ABA
        //                                       -> B -> BA
        //                                       -> A
        for (let j = i; j < s.length; j++) {
            if (!u[s[j]]) {
                u[s[j]] = 1;

                pCount++;
            } else if (u[s[j]] === 1) {
                u[s[j]] = u[s[j]] + 1;

                pCount--;
            }

            count += pCount;
        }
    }

    // for (let i = 1; i <= s.length; i++) {
    //     for (let j = 0; j < s.length; j++) {
    //         if (j + i > s.length) {
    //             break;
    //         }

    //         count = count + countUniqueChars(s, j, i + j - 1);
    //     }
    // }

    return count;
};