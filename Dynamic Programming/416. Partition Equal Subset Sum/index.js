/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const total = nums.reduce((sum, val) => sum + val, 0);
    if (total % 2 === 1) return false;

    let sum = total / 2;
    for (let i = 0; i < nums.length - 1; i += 1) {
        sum = sum - nums[i];
        if (sum === 0) {
            return true;
        }
        if (sum < 0) {
            return  false;
        }
    }

    return false;
};

canPartition([1,1,2,2]);

