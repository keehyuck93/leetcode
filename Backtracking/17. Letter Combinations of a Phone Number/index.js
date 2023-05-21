/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const result = [];
    const letterMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    const combination = (i, combs) => {
        if (combs.length === digits.length) {
            result.push(combs);
            return;
        }

        if (i >= digits.length) return;
        
        for (let j =0; j < letterMap[digits[i]].length; j += 1) {
            combs += letterMap[digits[i]][j];
            combination(i + 1, combs);
            combs = combs.slice(0, -1);
        }
    }

    if (digits.length < 1) return []

    combination(0, '');

    return result;
};

console.log(letterCombinations('234'));