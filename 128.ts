// https://leetcode.com/problems/longest-consecutive-sequence/description/

function longestConsecutive(nums: number[]): number {
    const obj = {};
    const numsWithoutPovtor = [];

    for (let i = 0; i < nums.length; i++) {
        // схлопываю массив до только уникальных элементов [1, 1, 2] -> [1, 2]
        if (!obj[nums[i]]) {
            numsWithoutPovtor.push(nums[i]);
        }

        // отменяю какие элементы вообще есть
        obj[nums[i]] = true;
    }

    const minArr = [];

    // создаю массив элементов с которых будут стартовать последовательности [1, 2, 3, 100] -> [1, 100]
    for (let i = 0; i < numsWithoutPovtor.length; i++) {
        // у элемента нет предыдущего (если есть 1 и 2, то будет только 1, так как у 2 есть 1 в массиве)
        if (!obj[numsWithoutPovtor[i] - 1]) {
            minArr.push(numsWithoutPovtor[i]);
        }
    }

    let max = 0;

    // прохожусь по началам последовательностей и подсчитываю их последовательности
    for (let i = 0; i < minArr.length; i++) {
        let j = minArr[i]; // старт с этого значения
        let locMax = 0;

        while (obj[j]) {
            j++;

            locMax++;
        }

        max = Math.max(max, locMax);
    }

    return max;
};