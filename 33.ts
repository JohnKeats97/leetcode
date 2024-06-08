function bsearch(nums: number[], target: number, l, r): number {    
    while (l !== r) {
        const mid = Math.floor((l + r) / 2);

        if (target > nums[mid]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    if (target === nums[l]) {
        return l;
    }

    return -1;
};

// 153
function findMin(nums: number[]): number {
    let l = 0;
    let r = nums.length - 1;
    
    while (l !== r) {
        const mid = Math.floor((l + r) / 2);

        if (nums[mid] > nums[r]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return l;
};

function search(nums: number[], target: number): number {
    // ищем минимум - он будет разделителем
    const minI = findMin(nums);

    if (target > nums[nums.length - 1] && minI !== 0) {
        // от 0 индекса до минимума (большая половина)
        return bsearch(nums, target, 0, minI - 1);
    }

    // от минимума вправо (меньшая половина)
    return bsearch(nums, target, minI, nums.length - 1);

    // // от минимума вправо (меньшая половина)
    // const fromMin = bsearch(nums, target, minI, nums.length - 1);

    // if (fromMin === -1 && minI !== 0) {
    //     // от 0 индекса до минимума (большая половина)
    //     return bsearch(nums, target, 0, minI - 1);
    // }

    // return fromMin; 
};