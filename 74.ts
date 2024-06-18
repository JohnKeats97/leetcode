// https://leetcode.com/problems/search-a-2d-matrix/

function searchMatrix(matrix: number[][], target: number): boolean {
    let l = 0;
    let r = matrix.length * matrix[0].length - 1;
    
    while (l < r) {
        const mid = Math.floor((l + r) / 2);

        const midI = Math.floor(mid / matrix[0].length);
        const midJ = mid - midI * matrix[0].length;

        if (target > matrix[midI][midJ]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    const midI = Math.floor(l / matrix[0].length);
    const midJ = l - midI * matrix[0].length;

    if (target === matrix[midI][midJ]) {
        return true;
    }

    return false;
};