/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const subsets = [[]];
    for(let i = 0; i < nums.length; i += 1) {
        const subsetsLen = subsets.length
        for (let j = 0; j < subsetsLen; j += 1) {
            subsets.push([...subsets[j], nums[i]]);
        }
    }
    
    return subsets
};
