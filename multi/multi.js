const board = document.createElement('div');
board.className = 'board';
document.body.appendChild(board);

for (y = 1; y <= 10; y++) {
  for (x = 1; x <= 10; x++) {
    const div = document.createElement('div');
    const solution = document.createElement('div');
    solution.className = 'solution';

    div.innerHTML = y * x;
    solution.innerHTML = `${y}x${x}`;
    board.appendChild(div);
    div.appendChild(solution);

  }
}