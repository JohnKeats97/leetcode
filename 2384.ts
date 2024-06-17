// https://leetcode.com/problems/largest-palindromic-number/description/

// считаю к-во каждой цифры
// от самой большой к маленькой иду и беру целочисленное деление на 2
// ищу среднее число из оставшихся
// соединяю res + mid + res.reverse

function largestPalindromic(num: string): string {
    const arrS = num.split('');
    const arrN = arrS.map(Number);

    const objN = {};

    arrN.forEach((item) => {
        if (objN[item]) {
            objN[item] = objN[item] + 1;
        } else {
            objN[item] = 1;
        }
    })

    const nA = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    let res = '';

    nA.forEach((n) => {
        if (!objN[n]) {
            return;
        }

        let count = Math.floor(objN[n]/2);

        if (n === 0 && !res) {
            return;
        }

        res += (new Array(count).fill(n)).join('');

        if (objN[n] % 2 === 0) {
            objN[n] = 0;
        } else {
            objN[n] = 1;
        }
    })

    let mid = '';

    for (let i = 0; i < nA.length; i++) {
        if (objN[nA[i]]) {
            mid = String(nA[i]);

            break;
        }
    }

    res = res + mid + res.split('').reverse().join('');

    return res;
};