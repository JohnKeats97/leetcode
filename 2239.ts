// https://leetcode.com/problems/find-closest-number-to-zero/description/

function findClosestNumber(nums: number[]): number {
    let val = nums[0];
    let valM = Math.abs(nums[0]);

    for (let i = 0; i < nums.length; i++) {
        if (valM > Math.abs(nums[i])) {
            valM = Math.abs(nums[i]);
            val = nums[i];
        } else if (valM === Math.abs(nums[i]) && val < nums[i]) {
            val = nums[i];
        }
    }

    return val;
};