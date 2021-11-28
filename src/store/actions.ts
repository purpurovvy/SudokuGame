import { Action, AnyAction } from 'redux';
import { ICreateGridAction } from './interfaces';
import { TBlockCoords, TDigits } from 'global/typings';

import * as types from './types';

export const createGrid = (payload?: any): ICreateGridAction => ({ type: types.CREATE_GRID, payload });

export const fillBlock = (value: TDigits, coords: TBlockCoords): AnyAction => ({
  coords,
  type: types.FILL_BLOCK,
  value,
});
export const selectBlock = (coords: TBlockCoords): AnyAction => ({
  coords,
  type: types.SELECT_BLOCK,
});

export const unselectBlock = (): AnyAction => ({
  type: types.UNSELECT_BLOCK,
});

export const enableValidation = (): Action => ({ type: types.ENABLE_VALIDATION });
export const disableValidation = (): Action => ({ type: types.DISABLE_VALIDATION });
export const displaySudokuTemplate = (): Action => ({ type: types.DISPLAY_SUDOKU_TEMPLATE });
export const hideSudokuTemplate = (): Action => ({ type: types.HIDE_SUDOKU_TEMPLATE });
