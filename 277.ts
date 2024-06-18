// https://leetcode.com/problems/find-the-celebrity/

/**
 * The knows API is defined in the parent class Relation.
 * knows(a: number, b: number): boolean {
 *     ...
 * };
 */

var solution = function(knows: any) {
    return function(n: number): number {
        let candidate = 0;

        // ищем потенциального кандидата исключая остальных (если кандидат кого-то знает, то он уже не звезда, и потенциальной звездой становится следующий)
        for (let i = 1; i < n; i++) {
            if (knows(candidate, i)) {
                candidate = i;
            }
        }

        // идем по всем и проверяем, что все знают кандидата, а он никого не знает
        for (let i = 0; i < n; i++) {
            if (i == candidate) {
                continue;
            }

            if (knows(candidate, i) || !knows(i, candidate)) {
                return -1;
            }
        }

        return candidate;
    };
};