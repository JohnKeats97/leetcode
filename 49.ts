// https://leetcode.com/problems/group-anagrams/

function groupAnagrams(strs: string[]): string[][] {
    const hash = strs.reduce((acc, item) => {
        const sItem = item.split('').sort().join('');

        if (acc[sItem]) {
            acc[sItem].push(item)
        } else (
            acc[sItem] = [item]
        )

        return acc;
    }, {});

    return Object.values(hash);
};