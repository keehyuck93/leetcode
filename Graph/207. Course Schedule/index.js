/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const visited = new Array(numCourses).fill(false);
	const recStack = new Array(numCourses).fill(false);
	const adj = {};

	for (let [target, prerequisite] of prerequisites) {
		if (adj[prerequisite]) {
			adj[prerequisite].push(target);
		} else {
			adj[prerequisite] = [target];
		}
	}

	const hasCycle = (index) => {
		if (recStack[index]) return true;
		if (visited[index]) return false;

		recStack[index] = true;
		visited[index] = true;
		const nextTargets = adj[index] || []
		for (const target of nextTargets) {
			if (hasCycle(target)) {
				return true;
			}
		}
		
		recStack[index] = false;

		return false;
	}

	for (const key of Object.keys(adj)) {
		if (hasCycle(key)) {
			return false;
		}
	}

	return true
};

// console.log(canFinish(3, [[0,2], [1,0], [2,1]]));
// console.log(canFinish(3, [[0,2], [2,1]]));
// console.log(canFinish(6, [[1,0], [2,1], [3,2], [4,2], [5,2], [0,5]]))
// console.log(canFinish(3, [[1,0], [2,1]]))
// console.log(canFinish(2, [[1,0], [0,1]]));
// console.log(canFinish(20, [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]]));
console.log(canFinish(5, [[1,4],[2,4],[3,1],[3,2]]));
// console.log(canFinish(5, [[1,4],[2,4]]));
