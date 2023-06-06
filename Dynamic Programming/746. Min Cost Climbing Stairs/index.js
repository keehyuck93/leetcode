/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const size = cost.length;
    const dp = [cost[0], cost[1]];

    for (let i=2; i < size; i += 1) {
        dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2])
    }

    return Math.min(dp[size-1], dp[size-2]);
};

// console.log(minCostClimbingStairs([10,15,20]));
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])); 