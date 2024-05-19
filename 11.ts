// https://leetcode.com/problems/container-with-most-water/description/

// мы двигаем меньшую, так как по меньшей считается длина и мы постоянно хотие увеличить меньшую

function maxArea(height: number[]): number {
    let i = 0;
    let j = height.length - 1;

    let max = 0;

    while (i < j) {
        const min = Math.min(height[i], height[j]);

        max = Math.max(max, min * (j - i));

        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return max;
};