/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const results = [];
    const combs = [];
    
    candidates.sort((a,b) => a - b);
    const dfs = (start, total) => {
        if (total === 0) {
            results.push([...combs]);
            return;
        }

        for (let i = start; i < candidates.length; i += 1) {
            const candidate = candidates[i]

            if (total - candidate >= 0) {
                combs.push(candidate);
                dfs(i, total - candidate);
                combs.pop();
            } else {
                break;
            }
        }
    }

    dfs(0, target);
    return results;
};

console.log(combinationSum([3,2,7,6], 6));