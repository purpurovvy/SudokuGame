import { globalValues } from 'global/globalValues';
import { TGrid } from 'global/typings';
import { copyGrid, getRandomIndex, solveGrid } from '../';

/**
 * Removes numbers from a full grid to create a Sudoku Puzzle.
 * @param grid 9X9 Sudoku Grid
 * @param attempts number of attempts to solve (higher means more difficult) - default 5
 */
export const removeNumbers = (grid: TGrid, attempts = 5): TGrid => {
  while (attempts > 0) {
    let row = getRandomIndex();
    let col = getRandomIndex();

    while (grid[row][col] === 0) {
      row = getRandomIndex();
      col = getRandomIndex();
    }

    const backup = grid[row][col];
    grid[row][col] = 0;

    const gridCopy = copyGrid(grid);

    globalValues.counter = 0;
    solveGrid(gridCopy);

    if (globalValues.counter !== 1) {
      grid[row][col] = backup;
      attempts--;
    }
  }

  return grid;
};
