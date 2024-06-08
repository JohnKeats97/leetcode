// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/

function isOk (weights, days, ship) {
    let curDays = 0;
    let curShip = ship;

    let i = 0;

    while (i < weights.length) {
        curShip = curShip - weights[i];

        if (curShip < 0) {
            curDays++;
            curShip = ship;
        } else {
            i++;
        }
    }

    curDays++;

    if (curDays > days) {
        return false;
    } else {
        return true;
    }
}

function shipWithinDays(weights: number[], days: number): number {
    let r = weights.reduce((a,b) => a + b);
    let l = Math.max(...weights);

    while (l !== r) {
        const cur = Math.floor((r + l) / 2);

        if (isOk(weights, days, cur)) {
            r = cur;
        } else {
            l = cur + 1;
        }
    }

    return l;
};