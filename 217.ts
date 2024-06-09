// https://leetcode.com/problems/contains-duplicate/

function containsDuplicate(nums: number[]): boolean {
    const u = {};

    for (let i = 0; i < nums.length; i++) {
        if (u[nums[i]]) {
            return true;
        }

        u[nums[i]] = true;
    }

    return false;
};