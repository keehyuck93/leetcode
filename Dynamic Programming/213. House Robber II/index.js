/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const backtrack = (arr) => {
        const size = arr.length;
        arr[1] = Math.max(arr[0], arr[1]);
        for (let i=2; i < size; i += 1) {
            arr[i] = Math.max(arr[i-1], arr[i-2] + arr[i]);
        }


        return arr[size - 1];
    }
    if (nums.length < 4) return Math.max(...nums);

    return Math.max(backtrack(nums.slice(0, -1)), backtrack(nums.slice(1)))
};
