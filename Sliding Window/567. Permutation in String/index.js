/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const len = s1.length;
    let l = 0;
    let r = len - 1;
    let current = s2.substring(l, r +1);

    const map = new Map();
    for (const word of s1) {
        map.set(word, map.has(word) ? map.get(word) + 1 : 1);
    }
    
    const currentMap = new Map();
    for (const word of current) {
        currentMap.set(word, currentMap.has(word) ? currentMap.get(word) + 1 : 1);
    }
    
    const isSame = () => {
        for (const key of map.keys()) {
            if (map.get(key) !== currentMap.get(key)) return false;
        }

        return true;
    }

    while(r < s2.length) {
        if (isSame()) {
            return true;
        } else {
            currentMap.set(s2[l], currentMap.get(s2[l]) - 1);

            r += 1;
            l += 1;
            currentMap.set(s2[r], currentMap.has(s2[r]) ? currentMap.get(s2[r]) + 1 : 1);
        }
    }

    return false;
};