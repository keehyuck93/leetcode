/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let l = 0;
    let r = height.length - 1;


    while(l < r) {
        const left = height[l];
        const right = height[r];
        
        maxArea = Math.max(maxArea, Math.min(left, right) * (r - l));

        if (left >= right) r -= 1;
        else l += 1
    }

    return maxArea;
};


