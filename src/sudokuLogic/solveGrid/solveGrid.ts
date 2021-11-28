import { globalValues } from 'global/globalValues';
import { TGrid, TDigits } from 'global/typings';
import { gridValidation, identifySquare, isInCol, isInRow, isInSquare } from '../';

const numbers: TDigits[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A backtracking/recursive function to check all possible combinations of numbers until a solution is found
 * @param grid A 9X9 array consisting of values from 0-9)
 */
export const solveGrid = (grid: TGrid) => {
  let row = 0;
  let col = 0;

  for (let i = 0; i < globalValues.blocksAmount; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      for (let value of numbers)
        if (!isInRow({ grid, row, value }))
          if (!isInCol({ col, grid, value })) {
            const square = identifySquare({ col, grid, row });
            if (!isInSquare({ square, value })) {
              grid[row][col] = value;
              if (gridValidation(grid)) {
                globalValues.counter++;
                break;
              } else if (solveGrid(grid)) return true;
            }
          }
      break;
    }
  }

  grid[row][col] = 0;
};
