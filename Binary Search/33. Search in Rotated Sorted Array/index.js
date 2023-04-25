/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    if (nums.length === 1) return nums[0] === target ? 0 : -1

    while(l <= r) {
        const mid = Math.floor((l + r) / 2);

        if (nums[mid] === target) return mid
        
        if (nums[l] <= nums[mid]) {
            if (target >= nums[l] && target < nums[mid]) r = mid - 1;
            else l = mid + 1
        } else {
            if (target <= nums[r] && target > nums[mid]) l = mid + 1;
            else r = mid - 1;
        }
    }

    return -1;
};

console.log(search([5, 1, 3], 3));