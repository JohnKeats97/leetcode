// https://leetcode.com/problems/valid-sudoku/description/

function isValidSudoku(board: string[][]): boolean {
    for (let i = 0; i < board.length; i++) {
        const u = {};

        // прохожусь по сторокам большой матрицы
        for (let j = 0; j < board.length; j++) {
            // проверка на точку (точки игнорирую)
            if (Number.isNaN(Number(board[i][j]))) {
                continue;
            }

            // если нет повторяющихся элементов - то все ОК
            if (!u[board[i][j]]) {
                u[board[i][j]] = true;
            } else {
                return false;
            }
        }
    }

    // прохожусь по столбцам большой матрицы
    for (let i = 0; i < board.length; i++) {
        const u = {};

        for (let j = 0; j < board.length; j++) {
            if (Number.isNaN(Number(board[j][i]))) {
                continue;
            }

            if (!u[board[j][i]]) {
                u[board[j][i]] = true;
            } else {
                return false;
            }
        }
    }

    // объект с маленькими матрицами
    const u = {};

    // прохожусь по маленьким матрицам
    for (let i = 0; i < board.length; i++) {
        const coefI = Math.floor(i / 3);

        for (let j = 0; j < board.length; j++) {
            const coefJ = Math.floor(j / 3);

            if (!u[coefI]) {
                u[coefI] = {};
            }

            if (!u[coefI][coefJ]) {
                u[coefI][coefJ] = {};
            }

            if (Number.isNaN(Number(board[i][j]))) {
                continue;
            }

            if (!u[coefI][coefJ][board[i][j]]) {
                u[coefI][coefJ][board[i][j]] = true;
            } else {
                return false;
            }
        }
    }

    return true;
};