/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let result = false;

    const m = board.length;
    const n = board[0].length;
    console.log(m, n);
    let visited = [];
    const  initializeVisited = () => {
        visited = Array.from(Array(m), () => new Array(n));
    }
    const findWord = ([i, j], index) => {
        visited[i][j] = true;
        
        const nextWord = word[index + 1];
        
        if (!nextWord) {
            result = true;
            return;
        }
        if (i+1 < m && board[i+1][j] === nextWord && !visited[i+1][j]) findWord([i+1, j], index + 1)
        if (j+1 < n && board[i][j+1] === nextWord && !visited[i][j+1]) findWord([i, j+1], index + 1)
        if (i > 0 && board[i-1][j] === nextWord && !visited[i-1][j]) findWord([i-1, j], index + 1)
        if (j > 0 && board[i][j-1] === nextWord && !visited[i][j-1]) findWord([i, j-1], index + 1)

        visited[i][j] = false;
    }

    for (let i=0; i < m; i += 1) {
        const row = board[i]
        for (let j=0; j < n; j += 1) {
            const cell = row[j];
            
            if (cell === word[0]) {
                initializeVisited();
                findWord([i,j], 0);
                if (result) return result;
            }
        }
    }

    return result;
};

console.log(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], 'ABCESEEEFS'));
