/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates = candidates.sort((a,b) => a - b);
    const result = [];
    
    const sum = (i, combs, total) => {
        if (total === 0) {
            result.push([...combs]);
            return;
        }

        if (!candidates[i] || total < 0) return;

    
        const newComb = [...combs, candidates[i]];
        sum(i+1, newComb, total - candidates[i]);
        newComb.pop();
        
        while(i+1 < candidates.length && candidates[i] === candidates[i+1]) {
            i += 1;
        }

        sum(i+1, newComb, total);
    }

    
    sum(0, [], target);
    return result;
};

// console.log(combinationSum2([10,1,2,7,6,1,5], 8));
// console.log(combinationSum2([1,1,1,1,1], 2));
// console.log(combinationSum2([14,6,25,9,30,20,33,34,28,30,16,12,31,9,9,12,34,16,25,32,8,7,30,12,33,20,21,29,24,17,27,34,11,17,30,6,32,21,27,17,16,8,24,12,12,28,11,33,10,32,22,13,34,18,12], 27));