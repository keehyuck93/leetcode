/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const countPalindrome = (l, r) => {
        let res = 0;
        
        while( l >= 0 && r < s.length && s[l] === s[r]) {
            res += 1;
            l -= 1;
            r += 1
        }
        return res
    }

    let palindromeCount = 0;
    for (let i=0; i < s.length; i += 1) {
        palindromeCount += countPalindrome(i, i);
        palindromeCount += countPalindrome(i, i+1);
    }
    
    return palindromeCount;
};


// console.log(countSubstrings("abc"));
countSubstrings("abc");
// babac
// b a bab b aba babac