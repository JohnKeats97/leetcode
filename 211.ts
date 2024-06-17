// https://leetcode.com/problems/design-add-and-search-words-data-structure/

// представляю символы в массивы по уровням, как в дереве
// если это не точка, то выбираю только нужные символы для дальнейшего прохода
// если точка, то беру все символы с этого уровня на следующий проход цикла
// помечаю так же конец слова, означает что тут можно закочить слово

class WordDictionary {
    uSim
    constructor() {
        this.uSim = {};
    }

    addWord(word: string): void {
        let locS = this.uSim;

        for (let s of word) {
            if (!locS[s]) {
                locS[s] = {};
            }

            locS = locS[s];
        }

        locS[0] = true;
    }

    search(word: string): boolean {
        let locS = [this.uSim];

        for (let s of word) {
            if (s === '.') {
                locS = locS.reduce((acc, localSItem) => {
                        acc = [
                            ...acc,
                            ...Object.values(localSItem)
                        ]

                        return acc;
                    }, [])
            } else {
                locS = locS.reduce((acc, localSItem) => {
                        if (localSItem[s]) {
                            acc.push(localSItem[s])
                        }

                        return acc;
                    }, []);
            }

            if (!locS.length) {
                return false;
            }
        }

        for (let u of locS) {
            if (u[0]) {
                return true;
            }
        }

        return false;
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */


// ДОЛГОЕ
// заменяю во всех словах равных поисковому символы на точки, где они в исходном слове, и ищу там

// class WordDictionary {
//     u
//     constructor() {
//         this.u = {};
//     }

//     addWord(word: string): void {
//         this.u[word] = true;
//     }

//     search(word: string): boolean {
//         const tochIndexes = word.split('').reduce((acc, s, i) => {
//             if (s === '.') {
//                 acc.push(i);
//             }

//             return acc;
//         }, []);

//         if (tochIndexes.length) {
//             const uWithToch = Object.keys(this.u).reduce((acc, w) => {
//                 if (word.length !== w.length) {
//                     return acc;
//                 }

//                 const wArray = w.split('');

//                 for (let index of tochIndexes) {
//                     wArray[index] = '.';
//                 }

//                 const wWithToch = wArray.join('');

//                 acc[wWithToch] = true;

//                 return acc;
//             }, {});

//             return Boolean(uWithToch[word]);
//         } else {
//             return Boolean(this.u[word]);
//         }
//     }
// }

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */