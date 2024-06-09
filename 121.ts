// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

// просто иду по массиву и обновляю минимум и максимум, новый минимум даст большую прибыль в будущем

function maxProfit(prices: number[]): number {
    let max = 0;
    let min = prices[0];

    for (let i = 1; i < prices.length; i++) {
        max = Math.max(prices[i] - min, max);
        min = Math.min(prices[i], min);
    }

    return max;
};