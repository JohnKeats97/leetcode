// https://leetcode.com/problems/time-based-key-value-store/ (не работает)

function search(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    
    while (l !== r) {
        const mid = Math.floor((l + r) / 2);

        if (target > nums[mid]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    if (target === nums[l]) {
        return nums[l];
    }

    return nums[l];
};


var TimeMap = function() {
this.values = {};
    this.times = {};
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
    if (this.values[key]) {
        this.values[key][timestamp] = value;
        this.times[key].push(timestamp);
    } else {
        this.values[key] = {
            [timestamp]: value
        }
        this.times[key] = [timestamp];
    }
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
if (this.values[key]) {
        const time = search(this.times[key], timestamp);

        if (time > timestamp) {
            return '';
        } else {
            return this.values[key][time];
        }
    }

    return '';
};

/** 
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/