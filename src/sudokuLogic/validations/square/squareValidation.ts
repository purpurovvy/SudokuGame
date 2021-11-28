import { TDigits, TSquare } from 'global/typings';

interface IIsInSquare {
  square: TSquare;
  value: TDigits;
}

/**
 * A function that returns true if the value is already being used in the current grid square.
 * @param input Object with 3X# Square and value.
 */
export const isInSquare = ({ square, value }: IIsInSquare): boolean => {
  return [...square[0], ...square[1], ...square[2]].includes(value);
};
