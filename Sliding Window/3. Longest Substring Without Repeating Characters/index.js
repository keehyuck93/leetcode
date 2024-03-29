/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0;
    let max = 0;
    const set = new Set();
    for (let r=0; r < s.length; r += 1) {
        while(set.has(s[r])) {
            set.delete(s[l]);
            l+=1
        }
        set.add(s[r]);
        max = Math.max(max, r - l + 1)
    }
    return max;
};

console.log(lengthOfLongestSubstring("pwwkew"))