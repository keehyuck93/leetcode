/**
 * @param {string} s
 * @return {boolean}
 */ 
var isValid = function(s) {
    const stack = [];
    let top = -1;

    if (s.length === 1) return false;

    for (const word of s)  {
        if (['(', '[', '{'].includes(word)) {
            stack.push(word);
            top += 1;
        } else {
            const current = stack[top];
            if (current === '(' && word === ')') {
                stack.pop();
                top -= 1;
            } else if (current === '[' && word === ']') {
                stack.pop();
                top -= 1;
            } else if (current === '{' && word === '}') {
                stack.pop();
                top -= 1;
            } else {
                return false;
            }
        }
    }
    return stack.length > 0 ? false : true;
};
console.log(isValid("(("));
console.log(isValid("()"));
console.log(isValid("({[]})"))
console.log(isValid("({[{]}]})"))