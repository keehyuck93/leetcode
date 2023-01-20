/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const l = 0;
    let r = numbers.length - 1;
    
    while(numbers[r] > target) {
        r -= 1
    }
    console.log(r);
};

twoSum([2,7,11,15], 9)