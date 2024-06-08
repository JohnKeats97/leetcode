// https://leetcode.com/problems/koko-eating-bananas/description/

function eat(piles, h, speed) {
    let count = 0;

    for (let i = 0; i < piles.length; i++) {
        count += Math.ceil(piles[i] / speed);
    }

    if (count > h) {
        return false;
    }

    return true;
}

function minEatingSpeed(piles: number[], h: number): number {
    let l = 1;
    let r = Math.max(...piles);

    // идем от минимума до максимума скорости и ищем оптимальную скорость

    while (l !== r) {
        const cur = Math.floor((r + l) / 2);

        if (eat(piles, h, cur)) {
            r = cur;
        } else {
            l = cur + 1;
        }
    }

    return r;
};