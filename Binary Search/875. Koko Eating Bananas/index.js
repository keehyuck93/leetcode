/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const getHByK = (k) => {
        let result = 0
        for(let i=0; i < piles.length; i+=1) {
            result += Math.ceil(piles[i] / k);
        }
        return result;
    }
    const maxPile = Math.max(...piles);
    let l = 1;
    let r = maxPile;

    let result = Math.ceil(piles[0] / h);
    while(l <= r) {
        const k = Math.floor((l + r) / 2);
        const curH = getHByK(k);

        if (h >= curH) {
            r = k - 1;
        } else {
            result = k + 1;
            l = k + 1;
        }
    }
    
    return result;
};

minEatingSpeed([30, 50], 7);