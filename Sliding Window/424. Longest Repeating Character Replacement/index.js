/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l = 0;
    let r = 0;
    const characters = {};

    while(r <= s.length - 1) {
        characters[s[r]] = characters[s[r]] ? characters[s[r]] + 1 : 1

        const stringLen = r - l + 1;

        if (stringLen <= Math.max(...Object.values(characters)) + k) {
            r += 1
        } else {
            characters[s[l]] -= 1;
            l += 1;
            r += 1;
        }
    }

    return r - l;
};

console.log(characterReplacement('AABABBA', 1));