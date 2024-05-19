// https://leetcode.com/problems/trapping-rain-water/description/

function trap(height: number[]): number {
    let sum = 0;

    let lastMax = 0;
    let cur = 1;

    while (cur < height.length) {
        if (height[cur] >= height[lastMax]) {
            let h = Math.min(height[lastMax], height[cur]);

            for (let i = lastMax + 1; i < cur; i++) {
                sum = sum + h - height[i];
            }

            lastMax = cur;
        }

        cur++;
    }

    // не учитываю последнюю

    return sum;
};