// https://leetcode.com/problems/largest-number/submissions/1228878400/

// сортирую по возрастанию суммы строковых чисел, смотрю что больше [3, 30] 330 или 303, если 330, то 3 > 30

function largestNumber(nums: number[]): string {
    const numsStringSort = nums.map(String).sort((a, b) => {
        if (Number(a + b) > Number(b + a)) {
            return 1;
        } 

        if (Number(a + b) < Number(b + a)) {
            return -1;
        } 

        return 0;
    });

    const s = numsStringSort.reverse();

    if (s[0] === "0") {
        return "0";
    }

    return s.join('');
};