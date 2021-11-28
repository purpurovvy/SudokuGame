import { TGrid } from 'global/typings';
import { createCustomTemplate } from '../';

/**
 * A function that create grid with 0 || given values
 * @param customGridInput array of strings which contains information about [row][col]:value
 */
export const createNewGrid = (customGridInput?: string[]): TGrid => {
  const template: TGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  if (customGridInput) {
    createCustomTemplate(customGridInput, template);
  }
  return template;
};
