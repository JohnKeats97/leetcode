// https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        obj[target - nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] && obj[nums[i]] !== i) {
            return [i, obj[nums[i]]];
        }
    }
};