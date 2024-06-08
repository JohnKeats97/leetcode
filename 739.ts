// https://leetcode.com/problems/daily-temperatures/description/

function dailyTemperatures(temperatures: number[]): number[] {
    const stack = [];
    const result = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length) {
            const val = stack.pop();

            // если первое в стеке - меньше, значит все в стеке больше
            if (temperatures[i] <= val[0]) {
                stack.push(val);

                break;
            } else {
                // идем до первого меньшего и записываем большие
                result[val[1]] = i - val[1];
            }
        }

        stack.push([temperatures[i], i]);
    }

    // остаток зануляем
    while (stack.length) {
        const val = stack.pop();

        result[val[1]] = 0;
    }

    return result;
};