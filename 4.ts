// https://leetcode.com/problems/median-of-two-sorted-arrays/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // высчитываю где будет моя медиана и ее индексы
    // иду как обычно по массивам чтобы их замержить, но не создаю новый массив, а просто сверяю индексы
    // когда достигаю индекса медианы - выхожу и считаю медиану

    const med = (nums1.length + nums2.length) / 2;
    
    let medMinI = 0;
    let medMaxI = 0;

    if (Number.isInteger(med)) {
        medMinI = med - 1;
        medMaxI = med;
    } else {
        medMinI = Math.floor(med);
        medMaxI = medMinI;
    }

    let medMin = 0;
    let medMax = 0;

    let i = 0;
    let j = 0;

    while ((i + j) <= medMaxI) {
        if (nums1[i] < nums2[j] || nums2[j] === undefined) {
            if ((i + j) === medMinI) {
                medMin = nums1[i];
            }

            if ((i + j) === medMaxI) {
                medMax = nums1[i];
            }

            i++;

            continue;
        }

        if (nums1[i] >= nums2[j] || nums1[i] === undefined) {
            if ((i + j) === medMinI) {
                medMin = nums2[j];
            }

            if ((i + j) === medMaxI) {
                medMax = nums2[j];
            }

            j++;

            continue;
        }
    }

    return (medMin + medMax) / 2;
};

