/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const getPalindrome = (l, r) => {
        if (s[l] !== s[r]) return "";

        while(l - 1 >= 0 && r + 1 < s.length && s[l-1] === s[r+1]) {
            l -= 1;
            r += 1;
        }

        return s.slice(l, r + 1);
    }

    let result = ""
    for (let i=0; i < s.length; i += 1) {
        const palindrome = getPalindrome(i, i);
        if (palindrome.length > result.length) {
            result = palindrome
        }
    }

    for (let i=0; i < s.length - 1; i += 1) {
        const palindrome = getPalindrome(i, i+1);
        if (palindrome.length > result.length) {
            result = palindrome
        }
    }
    
    return result;
};

console.log(longestPalindrome("abaa"));
// b ba bab baba babad abad