import { TGrid, TSquare } from 'global/typings';

interface IInput {
  grid: TGrid;
  row: number;
  col: number;
}

/**
 * A function that identifies and returns the current square of a given sudoku grid at a row and column index.
 * @param input Object with 9X9 Sudoku Grid, row index and column index
 */
export const identifySquare = ({ col, grid, row }: IInput): TSquare => {
  const pushFirstLine = (square: any[], index: number) => square.push([grid[index][0], grid[index][1], grid[index][2]]);
  const pushSecondLine = (square: any[], index: number) =>
    square.push([grid[index][3], grid[index][4], grid[index][5]]);
  const pushThirdLine = (square: any[], index: number) => square.push([grid[index][6], grid[index][7], grid[index][8]]);
  const square = [] as any[];

  if (row < 3) {
    if (col < 3) for (let index = 0; index < 3; index++) pushFirstLine(square, index);
    else if (col < 6) for (let index = 0; index < 3; index++) pushSecondLine(square, index);
    else for (let index = 0; index < 3; index++) pushThirdLine(square, index);
  } else if (row < 6) {
    if (col < 3) for (let index = 3; index < 6; index++) pushFirstLine(square, index);
    else if (col < 6) for (let index = 3; index < 6; index++) pushSecondLine(square, index);
    else for (let index = 3; index < 6; index++) pushThirdLine(square, index);
  } else {
    if (col < 3) for (let index = 6; index < 9; index++) pushFirstLine(square, index);
    else if (col < 6) for (let index = 6; index < 9; index++) pushSecondLine(square, index);
    else for (let index = 6; index < 9; index++) pushThirdLine(square, index);
  }
  return square as TSquare;
};
