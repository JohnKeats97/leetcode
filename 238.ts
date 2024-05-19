// https://leetcode.com/problems/product-of-array-except-self/description/


function productExceptSelf(nums: number[]): number[] {
    const res = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i - 1] === undefined) {
            res[i] = 1;
        } else {
            res[i] = res[i - 1] * nums[i - 1];
        }
    }

    let r = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = res[i] * r;

        r = r * nums[i];
    }

    return res;
};

// function productExceptSelf(nums: number[]): number[] {
//     const L = [];
//     const R = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i - 1] === undefined) {
//             L[i] = 1;
//         } else {
//             L[i] = L[i - 1] * nums[i - 1];
//         }
//     }

//     for (let i = nums.length - 1; i >= 0; i--) {
//         if (nums[i + 1] === undefined) {
//             R[i] = 1;
//         } else {
//             R[i] = R[i + 1] * nums[i + 1];
//         }
//     }

//     const res = [];

//     for (let i = 0; i < nums.length; i++) {
//         res.push(L[i] * R[i])
//     }

//     return res;
// };