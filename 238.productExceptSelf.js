/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = new Array(nums.length).fill(1);

    let prefix = 1;
    for (let i=0; i < nums.length; i+=1) {
        result[i] = prefix;
        prefix *= nums[i]
    }
    let postfix = 1;
    for (let i = nums.length - 1; i >= 0 ; i-=1) {
        result[i] *= postfix;
        postfix *= nums[i]
    }
    return result
};

productExceptSelf([1,2,3,4]);