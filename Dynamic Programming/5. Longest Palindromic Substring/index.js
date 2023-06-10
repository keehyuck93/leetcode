/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const isPalindrome = (str) => {
        const size = str.length;

        for (let i = 0; i < size / 2; i += 1) {
            if (str[i] !== str[size-1-i]) {
                return false;
            }
        }
        return true;
    }

    let longestSize = 1;
    let longest = s[0];

    if (s.length === 1) return longest;

    for (let l = 0; l < s.length; l += 1) {
        let str = s.slice(l, longestSize);
        console.log(str)
        for (let r = longestSize; r < s.length; r += 1) {
            str = str.concat(s[r]);

            if (isPalindrome(str)) {
                longest = str;
                longestSize = str.length;
            }
        }
    }

    return longest;
};

console.log(longestPalindrome("babaa"));
// b ba bab baba babad abad