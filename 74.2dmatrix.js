/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const n = matrix[0].length;
    const m = matrix.length;
    let targetN = 0;

    for (let i=0; i < m; i+=1) {
        if (target <= matrix[i][n-1]) {
            targetN = i;
            break;
        }
    }

    let l = 0;
    let r = n - 1;
    const targetMatrix = matrix[targetN];
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (targetMatrix[mid] === target) return true
        if (targetMatrix[mid] < target) l = mid + 1;
        if (targetMatrix[mid] > target) r = mid - 1;
    }

    return false;
};

// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 16));
console.log(searchMatrix([[1],[3]], 1));