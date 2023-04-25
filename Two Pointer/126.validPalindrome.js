/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l = 0;
    let r = s.length-1;

    const regex = new RegExp(/^[a-z0-9]+$/i)
    while(l < r) {
        const left = s[l];
        const right = s[r];
        const isLeftAlpha = regex.test(left);
        const isRightAlpha = regex.test(right);
        
        if (!isLeftAlpha) {
            l += 1;
            continue;
        }
        if (!isRightAlpha) {
            r -= 1;
            continue;
        }
        if (isLeftAlpha && isRightAlpha) {
            if (left.toLowerCase() !== right.toLowerCase()) {
                return false;
            }
            l +=1;
            r -=1;
        }
    }

    return true;
};


