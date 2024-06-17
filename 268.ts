// https://leetcode.com/problems/missing-number/

function missingNumber(nums: number[]): number {
    const max = Math.max(...nums);

    // если пропущено число последнее, [0, 1] => 2
    if (max === nums.length - 1) {
        return max + 1;
    }

    // сумма всех элементов массива
    const sum = nums.reduce((s, item) => s + item, 0);

    // сумма от 0 до длинны массива, длинна массива, а не длинна массива + 1, так как считаем от 0
    const allSum = nums.length * (nums.length + 1) / 2;

    return allSum - sum;
};