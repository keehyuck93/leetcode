/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates = candidates.sort((a,b) => a - b);
    const result = [];
    
    const backtrack = (i, combs, total) => {
        if (total === 0) {
            result.push([...combs]);
            return;
        }

        if (total < 0) return;

        let prev = -1;
        for (let j = i; j < candidates.length; j += 1) {
            if  (candidates[j] === prev) continue

            const newComb = [...combs, candidates[j]];
            backtrack(j+1, newComb, total - candidates[j]);
            newComb.pop();
            prev = candidates[j];
        }
    }

    
    backtrack(0, [], target);
    return result;
};

combinationSum2([1,1], 4);
// console.log(combinationSum2([10,1,2,7,6,1,5], 8));
// console.log(combinationSum2([1,1,1,1,1], 2));
// console.log(combinationSum2([14,6,25,9,30,20,33,34,28,30,16,12,31,9,9,12,34,16,25,32,8,7,30,12,33,20,21,29,24,17,27,34,11,17,30,6,32,21,27,17,16,8,24,12,12,28,11,33,10,32,22,13,34,18,12], 27));