// https://leetcode.com/problems/binary-search/description/

function search(nums: number[], target: number): number {
    let l = 0;
    let r = nums.length - 1;
    
    while (l !== r) {
        const mid = Math.floor((l + r) / 2);

        if (target > nums[mid]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    if (target === nums[l]) {
        return l;
    }

    return -1;
};