// https://leetcode.com/problems/top-k-frequent-elements/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const u = {};

    for (let i = 0; i < nums.length; i++) {
        if (!u[nums[i]]) {
            u[nums[i]] = 1;
        } else {
            u[nums[i]]++;
        }
    }

    const sortU = Object.entries(u).sort((a, b) => b[1] - a[1]);

    const res = [];

    for (let i = 0; i < k; i++) {
        res.push(sortU[i][0])
    }

    return res;
};