// https://leetcode.com/problems/string-compression/description/

function compress(chars: string[]): number {
    let i = 0;
    let j = 1;
    let cur = chars[0];
    let count = 1;

    while (j < chars.length) {
        if (chars[j] === cur) {
            count++;
            j++;
        } else {
            chars[i] = cur;
            i++;
            cur = chars[j];

            if (count !== 1) {
                const sCount = String(count);

                for (let z = 0; z < sCount.length; z++) {
                    chars[i + z] = sCount[z];
                }

                i += sCount.length;

                count = 1;
            }

            j++;
        }
    }

    chars[i] = cur;
    i++;

    if (count !== 1) {
        const sCount = String(count);

                for (let z = 0; z < sCount.length; z++) {
                    chars[i + z] = sCount[z];
                }

                i += sCount.length;
    }

    return i;
};