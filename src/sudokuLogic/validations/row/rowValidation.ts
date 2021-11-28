import { TGrid, TDigits } from 'global/typings';

interface IIsInRow {
  grid: TGrid;
  row: number;
  value: TDigits;
}

/**
 * A function that returns true if the value is already being used in the current grid row.
 * @param input Object with 9x9 Sudoku Grid, row index and value
 */

export const isInRow = ({ grid, row, value }: IIsInRow): boolean => {
  return grid[row].includes(value);
};
