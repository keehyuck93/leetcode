/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const cars = [];
    const stack = [];
    for (let i =0; i < position.length; i += 1) {
        cars.push([position[i], speed[i]]);
    }
    cars.sort((a, b) => a[0] - b[0]);
    
    
    for (const car of cars) {
        const stackSize = stack.length;
        if (stackSize > 0) {
            const top = stack[stackSize - 1];
        }

        stack.push(car);
    }
};

// taget = 12, pos = [10,8,0,5,3], speed = [2,4,1,1,3]
// [0, 3, 5, 8, 10]
// [12, 3, 1, 4, 2]

// p1 + s1x = p2 + s2x
// (s1-s2)x = p2 - p1
// 0 = p2 - p1 / s1- s2

// [[12, 12], [6, 3], [12, 4], [6, 1], [12, 2]]


// [[0, 12], [6, 1], [8, 4], [10, 2]]
carFleet(12, [10,8,0,5,3], [2,4,1,1,3])

// [0, 2, 4] [4, 2, 1]

// 1.  [ [4, 4], [4, 2], [5, 1]]
// 2.  [ [4, 2], [5, 1] ]
// 3.  [ [6, 4], [6, 2] ]
// 4.  [ [6, 2] ]
// [10, 8, 0, 5, 3]
// [ 2, 4, 1, 1, 3]


// [[12, 2], [12, 4]]
// [[12, 2], [1, 1], [6, 1], [6, 6]]
// [[12, 2], [1, 1], [6, 1]]
// [[12, 2], [1, 1], [6, 1], [13, 1]]
// [[14, 4], [2, 1], [7, 1], [14, 1]]