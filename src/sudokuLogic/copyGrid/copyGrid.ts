import { TGrid } from 'global/typings';

/**
 * A function which takes grid and return clone of the input
 * @param grid first array to be compared
 */
export const copyGrid = (grid: TGrid): TGrid => {
  const gridCopy = grid.map((x) => x.slice()) as TGrid;
  return gridCopy;
};
