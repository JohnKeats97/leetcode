// https://leetcode.com/problems/search-a-2d-matrix/

// не работает [[1], [3]]

function searchMatrix(matrix: number[][], target: number): boolean {
    let l = 0;
    let r = matrix.length * matrix[0].length - 1;
    
    while (l !== r) {
        const mid = Math.floor((l + r) / 2);

        const midI = Math.floor(mid / matrix.length);
        const midJ = mid - midI * matrix.length;

        if (target > matrix[midI][midJ]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    const midI = matrix.length === 1 ? 0 : Math.floor(l / matrix.length);
    const midJ = l - midI * matrix.length;

    if (target === matrix[midI][midJ]) {
        return true;
    }

    return false;
};