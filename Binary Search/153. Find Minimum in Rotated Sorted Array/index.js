/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    let res = nums[0];

    
    while(l <= r) {
        if(nums[l] < nums[r]) {
            res = Math.min(res, nums[l]);
            break;
        }
        

        const mid = Math.floor((l + r) / 2);
        res = Math.min(res, nums[mid]);

        if (nums[l] <= nums[mid]) l = mid + 1;
        else r = mid - 1;
    }

    return res
};

console.log(findMin([3]));
console.log(findMin([3,2]))
console.log(findMin([2,3,4,5,1]))
console.log(findMin([5,1,2,3,4]));
console.log(findMin([8,9,10,1,2,3,4,5,6,7]));
console.log(findMin([1,2,3,4,5,6,7]));
