// https://leetcode.com/problems/max-area-of-island/description/

// иду по матрице и нахожу 1
// добавляю считаю к-во ячеек в острове
// иду вокруг этой единицы и зануляю все, пока не наткнусь на конец острова, так как этот остров уже отмечен
// иду дальше по матрице

function maxAreaOfIsland(grid: number[][]): number {
    let max = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                let curMax = 0;
                // зануляю остров так как я его уже посчитал
                // аналогом поиска в ширину (только без очереди)
                // зануляю ячейку и добавляю все 1 вокруг в дальнейшее зануление

                const arr = [[i, j]];

                while (arr.length) {
                    [i, j] = arr.pop();

                    if (grid[i][j] === 0) {
                        continue;
                    }

                    curMax++;

                    grid[i][j] = 0;

                    if (grid[i + 1]?.[j] === 1) {
                        arr.push([i + 1, j])
                    }

                    if (grid[i - 1]?.[j] === 1) {
                        arr.push([i - 1, j])
                    }

                    if (grid[i][j + 1] === 1) {
                        arr.push([i, j + 1])
                    }

                    if (grid[i][j - 1] === 1) {
                        arr.push([i, j - 1])
                    }
                }

                max = Math.max(curMax, max);
            }
        }
    }

    return max;
};