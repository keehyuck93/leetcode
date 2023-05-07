/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = [];
    const subsets = [];
    const dfs = (i) => {
        if  (i >= nums.length) {
            console.log(subsets);
            result.push([...subsets]);
            return;
        }

        subsets.push(nums[i]);
        dfs(i + 1);

        const lastVisited = subsets.pop();
        if (!subsets.includes(lastVisited)) {
            dfs(i + 1);
        }
    }
    dfs(0);
    return result;
};

console.log(subsetsWithDup([2,2,2]));