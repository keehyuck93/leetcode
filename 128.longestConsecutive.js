/**
 * @param {number[]} nums
 * @return {number}
 */
// sequence가 생기려면?
// 앞 뒤에 하나의 수가 존재해야 한다.
var longestConsecutive = function(nums) {
    if (nums.length < 2) return nums.length;

    const map = new Map();
    for(let i =0; i < nums.length; i +=1) {
        map.set(nums[i], 1)
    }

    let max = 1;
    let sum = 1;
    
    const findKey = (key) => {
        if (map.has(key + 1)) {
            sum += 1;
            max = Math.max(sum, max);
            findKey(key+1);
        } else {
            sum = 1;
        }
    }

    for (key of map.keys()) {
        if (!map.has(key-1)) findKey(key)
    }

    return max;
};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([1,0,3,2,4,5,6,7,8,9]));
console.log(longestConsecutive([0,-1]));
console.log(longestConsecutive([0, 0]));