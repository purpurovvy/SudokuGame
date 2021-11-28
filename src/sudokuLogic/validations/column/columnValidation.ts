import { TGrid, TDigits } from 'global/typings';

interface IIsInCol {
  col: number;
  grid: TGrid;
  value: TDigits;
}

export const isInCol = ({ col, grid, value }: IIsInCol): boolean => {
  for (let i = 0; i < 9; i++) if (value === grid[i][col]) return true;
  return false;
};
