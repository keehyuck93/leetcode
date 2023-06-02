var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    
    let currentMin = this.getMin();
    if (currentMin === undefined) {
        currentMin = val;
    }

    const min = Math.min(currentMin, val);
    this.minStack.push(min);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.slice(-1)[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack.slice(-1)[0];
};
