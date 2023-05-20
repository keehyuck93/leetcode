/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];
    const isPalindrome = (word) => {
        const len = word.length;

        for (let i = 0; i < Math.floor(len / 2); i += 1) {
            if (word[i] !== word[len - 1 - i]) return false;
        }
        return true;
    }

    const search = (res, substring, len) => {
        const target = substring.slice(0, len);
        const restSubstring = substring.slice(len);

        if (isPalindrome(target)) {
            res = [...res, target]
            for (let i=1; i <= restSubstring.length; i += 1) {
                search(res, restSubstring, i);
            }

            if (!restSubstring) {
                result.push(res);
                return;
            }
        }
    }

    for (let i=1; i <= s.length; i += 1) {
        search([], s, i);
    }

    return result;
};


console.log(partition("aaaab"));