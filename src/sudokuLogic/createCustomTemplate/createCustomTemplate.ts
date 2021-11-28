import { TDigitsZeroIncluded, TGrid } from 'global/typings';
import { regexPatterns } from '../../utils';

/**
 * A function which takes values and grid then return it with given input
 * @param customGridInput array of strings which contains information about [row][col]:value
 * @param template grid template which will be modified
 */

export const createCustomTemplate = (customGridInput: string[], template: TGrid) => {
  customGridInput.forEach((item: any) => {
    const customValues = item.replace(regexPatterns.filterDigits, '');
    const correctLength = 3; // customValues should contains 3 digits: row - col - value
    if (customValues.length !== correctLength) {
      return;
    }
    const customRow = customValues.charAt(0);
    const customCol = customValues.charAt(1);
    const customBlockValue = customValues.charAt(2);
    template[customRow][customCol] = parseInt(customBlockValue) as TDigitsZeroIncluded;
  });
};
