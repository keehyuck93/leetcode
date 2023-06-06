/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const ways = new Array(nums.length).fill().map(() => ({}));
    
    const find = (i, sum) => {
        if (i === nums.length)  { 
            return target === sum ? 1 : 0; 
        }
        if (ways[i][sum]) return ways[i][sum]

        ways[i][sum] = find(i+1, sum - nums[i]) +  find(i+1, sum + nums[i]);
        
        return ways[i][sum];
    }

    
    return find(0, 0);
};  

console.log(findTargetSumWays([1,1,1,1,1], 3));