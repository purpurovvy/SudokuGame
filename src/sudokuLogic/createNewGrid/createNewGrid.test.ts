import { createNewGrid } from '../';

describe('createFullGrid', () => {
  it('returns a 9X9 with value range 1 to 9', () => {
    const grid = createNewGrid();
    for (let row in grid)
      for (let col in grid[row]) {
        expect(grid[row][col]).toBe(0);
      }
  });
  it('returns a 9X9 with specified values', () => {
    const specifiedValues = ['[0][0]: 3', '[1][2]: 2', '[5][5]: 6', '[4][7]: 9'];

    const grid = createNewGrid(specifiedValues);
    for (let row in grid)
      for (let col in grid[row]) {
        expect(grid[0][0]).toBe(3);
        expect(grid[1][2]).toBe(2);
        expect(grid[5][5]).toBe(6);
        expect(grid[4][7]).toBe(9);
      }
  });
});
