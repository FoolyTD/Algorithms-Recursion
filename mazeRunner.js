// You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path though the maze.

// You can use the following mazes to test your program.

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function recursiveMazeRunner(maze, x = 0, y = 0) {
    maze.forEach(row => console.log(row));
    console.log(' ');
  
    // Set up the base case
    if (maze[y][x] === 'e') { return ' and you made it!' };
  
    // Void our current location so we don't backtrack
    maze[y][x] = '@'; 
  
    // Check available spaces and move
    if ( maze[y][x - 1] && (maze[y][x - 1] === ' ' || maze[y][x - 1] === 'e') ) {
      return 'L' + recursiveMazeRunner(maze, x - 1, y);
    };
    if ( maze[y][x + 1] === ' ' || maze[y][x + 1] === 'e' ) {
      return 'R' + recursiveMazeRunner(maze, x + 1, y);
    };
    if ( maze[y + 1][x] === ' ' || maze[y + 1][x] === 'e' ) {
      return 'D' + recursiveMazeRunner(maze, x, y + 1);
    };
    if ( maze[y - 1] && (maze[y - 1][x] === ' ' || maze[y - 1][x] === 'e') ) {
      return 'U' + recursiveMazeRunner(maze, x, y - 1);
    };
  
    // Handle for when no conditons are satisfied
    return ' you hit a wall!';
  };
  console.log(recursiveMazeRunner(maze));