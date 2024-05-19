// https://leetcode.com/problems/3sum/description/

function threeSum(nums: number[]): number[][] {
    const sNums = nums.sort((a, b) => a - b);

    const result = [];

    for (let cur = 0; cur < sNums.length - 2; cur++) {
        // ?
        if (sNums[cur] === sNums[cur - 1]) {
            continue;
        }

        const target = sNums[cur] * -1;
        let i = cur + 1;
        let j = sNums.length - 1;

        while (i < j) {
            const res = sNums[i] + sNums[j];

            if (res > target) {
                j--;
            } else if (res < target) {
                i++;
            } else {
                result.push([sNums[cur], sNums[i], sNums[j]])
                i++;
                j--;

                // ??
                while (i < j && sNums[i] == sNums[i - 1]) {
                    i++;
                }
            }
        }
    }

    return result;
};