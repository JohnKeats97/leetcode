// https://leetcode.com/problems/implement-trie-prefix-tree/description/

// записываю в u слова
// записываю simU по символам вложенно, чтобы потом искать вглубь символов

class Trie {
    constructor() {
        this.u = {};
        this.simU = {};
    }

    insert(word: string): void {
        this.u[word] = true;

        let localSimU = this.simU;

        for (let s of word) {
            if (!localSimU[s]) {
                localSimU[s] = {};
            }

            localSimU = localSimU[s];
        }
    }

    search(word: string): boolean {
        return Boolean(this.u[word]);
    }

    startsWith(prefix: string): boolean {
        let localSimU = this.simU;

        for (let s of prefix) {
            if (!localSimU[s]) {
                return false;
            }

            localSimU = localSimU[s];
        }

        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */