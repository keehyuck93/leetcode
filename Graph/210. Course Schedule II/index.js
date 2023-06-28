/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const set = new Set()
    const adj = {};
    for (const [take, required] of prerequisites) {
        adj[required] = adj[required] ? [...adj[required], take]: [take]
        set.add(take);
    }
    console.log(adj)
    if (set.size === numCourses) return []

    const queue = []
    const result = new Set()
    for (const [take, required] of prerequisites) {
        if (!set.has(required)) {
            queue.push(...adj[required]);
            result.add(required);
            
            while(queue.length > 0) {
                const popped = queue.shift();
                
                if (!result.has(popped)) {
                    result.add(popped);
                    queue.push(...(adj[popped] || []));
                }
            }
        }
    }
    
    return Array.from(result);
};

console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));