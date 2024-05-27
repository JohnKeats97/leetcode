// https://leetcode.com/problems/binary-search/description/

function search(nums: number[], target: number, l?: number, r?: number): number {
    l = l === undefined ? 0 : l;
    r = r === undefined ? nums.length : r;

    if (l === r) {
        return -1;
    }

    const mid = Math.floor((r - l) / 2);

    if (nums[l + mid] === target) {
        return l + mid;
    }

    if (target > nums[l + mid]) {
        return search(nums, target, l + mid + 1, r);
    } else {
        return search(nums, target, l, l + mid);
    }
};