/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    const modular = {
        ["+"]: (a, b) => a + b,
        ["-"]: (a, b) => a - b,
        ["*"]: (a, b) => a * b,
        ["/"]: (a, b) => Math.trunc(a / b)
    }

    for (const token of tokens) {
        if (modular[token]) {
            const right = stack.pop();
            const left = stack.pop();

            stack.push(modular[token](left, right));
        } else {
            stack.push(Number(token))
        }
    }

    return stack[0];
};
