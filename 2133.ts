// https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers

function checkValid(matrix: number[][]): boolean {
    for (let i = 0; i < matrix.length; i++) {
        const u = {};

        // иду по строках и смотрю что в них все разные числа
        for (let j = 0; j < matrix.length; j++) {
            if (!u[matrix[i][j]]) {
                u[matrix[i][j]] = true;
            } else {
                return false;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        const u = {};

        // иду по столбцам и смотрю что в них все разные числа
        for (let j = 0; j < matrix.length; j++) {
            if (!u[matrix[j][i]]) {
                u[matrix[j][i]] = true;
            } else {
                return false;
            }
        }
    }

    return true;
};