// https://leetcode.com/problems/merge-sorted-array/submissions/1072781425/

/**
 Do not return anything, modify nums1 in-place instead.
 */

 // так как по условию я должен только изменять nums1, не возвращаться ничего
 // я копирую nums1 чтобы потом изменять nums1
// иду пока их общая длина не закончится
 // иду по numsM1 и nums2, если 1 меньше 2 (или 2 закончился), то добавляю 1, иначе 2

 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let numsM1 = [...nums1];
    let a = 0;
    let i = 0;
    let j = 0;

    while (a < (m + n)) {
      if (numsM1[i] < nums2[j] && i < m || nums2[j] === undefined) {
        nums1[a] = numsM1[i];
        i++;
      } else {
        nums1[a] = nums2[j];
        j++;
      }
      a++;
    }
};