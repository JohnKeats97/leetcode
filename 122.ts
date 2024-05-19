// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

function maxProfit(prices: number[]): number {
    let sum = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        const cur = prices[i + 1] - prices[i];
        
        if (cur > 0) {
            sum += cur;
        }
    }

    return sum;
};