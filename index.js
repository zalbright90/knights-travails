function knightMoves(start, end) {
    // Define the knight's possible moves
    const directions = [
        [2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    // Check if a move stays on the board
    function isValid([x, y]) {
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }

    // Initialize BFS queue and visited set
    let queue = [[start]];
    let visited = new Set();
    visited.add(start.toString());

    // BFS: Process paths until we find the End
    while (queue.length > 0) {
        let path = queue.shift();
        let [x, y] = path[path.length - 1];

        if (x === end[0] && y === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            path.forEach(position => console.log(position));
            return path;
        }

        // Generate new moves and add to the queue
        for (let [dx, dy] of directions) {
            let newPosition = [x + dx, y + dy];
            if (isValid(newPosition) && !visited.has(newPosition.toString())) {
                visited.add(newPosition.toString());
                queue.push([...path, newPosition]);
            }
        }
    }
}

knightMoves([3,3], [4,3]);