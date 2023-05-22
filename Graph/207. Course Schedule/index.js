/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const visited = [];
  let canFinish = true;

  for (let i=0; i < numCourses; i += 1) {
    visited[i] = [];
    for (let j=0; j < numCourses; j += 1) {
        visited[i].push(-1);
    }
  }
  prerequisites = prerequisites.sort((a,b) => b[1] - a[1]);
  for (const [c, p] of prerequisites) {
    visited[c][p] = 0;  
  }

  const dfs = (c,p) => {
    
  }

  for (const [c, p] of prerequisites) {
    if (visited[c][p] === 0) {
        dfs(c,p);
    }
  }

  return canFinish;
};

// console.log(canFinish(3, [[0,2], [1,0], [2,1]]));
// console.log(canFinish(3, [[0,2], [2,1]]));
console.log(canFinish(6, [[1,0], [2,1], [3,2], [4,2], [5,2], [0,5]]))
console.log(canFinish(3, [[1,0], [2,1]]))