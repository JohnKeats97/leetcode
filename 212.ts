// https://leetcode.com/problems/word-search-ii/description/

// не прохожу по времени

// для каждого слова вызываю поиск его в матрице

// пускаю змейкой поиск
// ищу отправные точки, отмечаю что уже использовал и проверяю дальше, 
// для каждого нового погружения - свои отметки о прохождении
// каждый раз погружаюсь дальше в поиск рекурсивно

function exist(board: string[][], word: string): boolean {
    function find(sIndex, i, j, used) {
        if (sIndex === word.length) {
            return true;
        }

        used[`${i}_${j}`] = true;

        if (
            board[i - 1]?.[j] === word[sIndex] &&
            !used[`${i - 1}_${j}`] &&
            find(sIndex + 1, i - 1, j, {...used})
        ) {
            return true;
        }

        if (
            board[i + 1]?.[j] === word[sIndex] &&
            !used[`${i + 1}_${j}`] && 
            find(sIndex + 1, i + 1, j, {...used})
        ) {
            return true;
        }

        if (
            board[i]?.[j - 1] === word[sIndex] &&
            !used[`${i}_${j - 1}`] &&
            find(sIndex + 1, i, j - 1, {...used})
        ) {
            return true;
        }

        if (
            board[i]?.[j + 1] === word[sIndex] &&
            !used[`${i}_${j + 1}`] &&
            find(sIndex + 1, i, j + 1, {...used})
        ) {
            return true;
        }

        return false;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                if (find(1, i, j, {})) {
                    return true;
                }
            }
        } 
    }

    return false;
};

function findWords(board: string[][], words: string[]): string[] {
    const ans = [];

    for (let word of words) {
        if (exist(board, word)) {
            ans.push(word);
        }
    }

    return ans;
};