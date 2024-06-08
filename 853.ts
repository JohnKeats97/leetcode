// https://leetcode.com/problems/car-fleet/description/

function carFleet(target: number, position: number[], speed: number[]): number {
    const obj = position.reduce((acc, item, index) => {
        acc[item] = speed[index];

        return acc;
    }, {});

    const sortPosition = [...position].sort((a, b) => b - a);
    const sortSpeed = sortPosition.map((item) => {
        return obj[item];
    });

    const stack = [];

    for (let i = 0; i < sortPosition.length; i++) {
        const time = (target - sortPosition[i]) / sortSpeed[i];

        if (!stack.length) {
            stack.push(time);

            continue;
        }

        const stackTime = stack.pop();

        if (stackTime >= time) {
            stack.push(stackTime);
        } else {
            stack.push(stackTime);
            stack.push(time);
        }
    }

    return stack.length;
};