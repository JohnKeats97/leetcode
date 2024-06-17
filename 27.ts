// https://leetcode.com/problems/remove-element/

function removeElement(nums: number[], val: number): number {
    let i = 0;
    let j = nums.length - 1;

    let count = 0;

    while (i < j) {
        if (nums[j] === val) {
            j--;

            continue;
        }

        if (nums[i] === val) {
            const swap = nums[j];

            nums[j] = nums[i];

            nums[i] = swap;

            i++;
            j--;
            count++;

            continue;
        }

        count++;
        i++;
    }

    if (nums[i] !== val) {
        count++;
    }

    return count;
};