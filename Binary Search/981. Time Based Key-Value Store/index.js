var TimeMap = function() {
  this.map = new Map();
  
  return null;
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (this.map.has(key)) {
        this.map.set(key, [...this.map.get(key), [timestamp, value]]);
    } else {
        this.map.set(key, [[timestamp, value]]);
    }

    return null;
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    const values = this.map.get(key);
    if (!values) return "";

    
    let l = 0;
    let r = values.length - 1;

    let result = "";
    while(l <= r) {
        const m = Math.floor((l + r) / 2);
        
        if (values[m][0] <= timestamp) {
            result = values[m][1];
            l = m + 1
        } else {
            r = m - 1;
        }
    }
    return result;
};
