// https://leetcode.com/problems/maximum-subarray/

// так как мне нужно вернуть только сумму, а не само начало и конец, то я
// иду по массиву, запоминаю максимальную сумму и тукущую сумму
// при этом если текущая сумма + элемент меньше текущего элемента, 
// то я просто беру его как новую сумму [-2, 1] => -2 + 1 = -1 или 1, беру 1 и иду дальше

function maxSubArray(nums: number[]): number {
    let max = nums[0];
    let cur = nums[0];

    for (let i = 1; i < nums.length; i++) {
        cur =  Math.max(nums[i] + cur, nums[i]);

        max = Math.max(max, cur);
    }

    return max;
};