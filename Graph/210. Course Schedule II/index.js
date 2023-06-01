/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const adj = {};
    const visited = new Array(numCourses).fill(false);

    for (let i=0; i < numCourses; i +=1) {
        adj[i] = [];
    }

    for (const [course, prerequisite] of prerequisites) {
        adj[prerequisite].push(course);
    }

    const hasCycle = (visit) => {
        console.log(visit);
        if (visited[visit]) return true;
        visited[visit] = true;

        const courses = adj[visit] || []
        for (const course of courses) {
            if (hasCycle(course)) {
                return true
            }
        }

        visited[visit] = false;
        return false;
    }

    // for (const key of Object.keys(adj)) {
	// 	hasCycle(key);
	// }
    hasCycle(0)
};

findOrder(4, [[1,0],[2,0],[3,1],[3,2]]);