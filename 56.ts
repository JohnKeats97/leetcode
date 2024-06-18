// https://leetcode.com/problems/merge-intervals/description/

function merge(intervals: number[][]): number[][] {
    // сортируем все интервалы по началу
    const intervalsSort = intervals.sort((a, b) => a[0] - b[0]);

    const res = [];

    let start = intervalsSort[0][0];
    let end = intervalsSort[0][1];

    for(let i = 0; i < intervalsSort.length; i++) {
        // начало нового интервала - старый сохраняю и иду к новому
        if (intervalsSort[i][0] > end) {
            res.push([start, end]);

            start = intervalsSort[i][0];
            end = intervalsSort[i][1];

            continue;
        }

        // расширяем правую границу, знаю что левая входит, а правая идет дальше
        if (intervalsSort[i][1] > end) {
            end = intervalsSort[i][1];
        }
    }

    res.push([start, end]);

    return res;
};