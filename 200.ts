// https://leetcode.com/problems/number-of-islands/description/

// иду по матрице и нахожу 1
// добавляю +1 к островам
// иду вокруг этой единицы и зануляю все, пока не наткнусь на конец острова, так как этот остров уже отмечен
// иду дальше по матрице

function numIslands(grid: string[][]): number {
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                // зануляю остров так как я его уже посчитал
                // аналогом поиска в ширину (только без очереди)
                // зануляю ячейку и добавляю все 1 вокруг в дальнейшее зануление

                const arr = [[i, j]];

                while (arr.length) {
                    [i, j] = arr.pop();

                    grid[i][j] = '0';

                    if (grid[i + 1]?.[j] === '1') {
                        arr.push([i + 1, j])
                    }

                    if (grid[i - 1]?.[j] === '1') {
                        arr.push([i - 1, j])
                    }

                    if (grid[i][j + 1] === '1') {
                        arr.push([i, j + 1])
                    }

                    if (grid[i][j - 1] === '1') {
                        arr.push([i, j - 1])
                    }
                }
            }
        }
    }

    return count;
};