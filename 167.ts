// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

function twoSum(numbers: number[], target: number): number[] {
    let i = 0;
    let j = numbers.length - 1;

    while (i < j) {
        const res = numbers[i] + numbers[j];

// если больше, то надо уменьшить
        if (res > target) {
            j--;
// если меньше, то надо увеличить            
        } else if (res < target) {
            i++;
        } else {
            return [i+1, j+1]
        }
    }
};