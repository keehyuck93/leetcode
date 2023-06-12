/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = (coins, amount) => {
  const map = {
    0: 0
  };
  coins.sort((a,b) => b - a);
  console.log(amount)
  const backtrack = (cur, total, count) => {
    // const sum = total + coins[cur];
    // sconst rest = amount - total;

    // console.log([cur, total, count]);
    // console.log([total, amount])
    // console.log(sum);
    // if (total > amount) return;
    // else if (total === amount) {
    //   console.log([cur, total])
    //   return;
    // }
    // if (map[rest] !== undefined) {
    //   map[amount] = Math.min(map[amount], count + map[rest]);
    //   return;
    // }

    // map[total] = count;
    
    for (let i = cur; i < coins.length; i += 1) {
      const sum = total + coins[i];
      if (sum === 0) {
        map[amount] = count;
        break;
      }
    }
  }

  for (let i=0; i < coins.length; i += 1) {
    backtrack(i, 0, 1); 
  }
  
  return map[amount] || -1;
};

 console.log(coinChange([411,412,413,414,415,416,417,418,419,420,421,422], 9864));
 // console.log(coinChange([5,2,1,1,2,3,4,5], 11));
//  console.log(coinChange([5, 2, 1], 11));

// 5 2 1
// 5 5 5 
// 5 5 2
// 5 5 1
// 5 2 2 2