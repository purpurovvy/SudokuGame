import { AnyAction } from 'redux';
import { createNewGrid, removeNumbers, copyGrid, compareArrays, fillGrid } from 'sudokuLogic';
import { TGrid } from 'global/typings';
import { IReducer } from './interfaces';
import * as types from './types';

const initialState: IReducer = {};

export const reducer = (state = initialState, action: AnyAction): IReducer => {
  switch (action.type) {
    case types.CREATE_GRID: {
      const customTemplate = action.payload;
      const gridTemplate = createNewGrid(customTemplate);
      const solvedGrid = fillGrid(copyGrid(gridTemplate));
      const challengeGrid = solvedGrid && !customTemplate ? removeNumbers(copyGrid(solvedGrid)) : gridTemplate;
      const workingGrid = copyGrid(challengeGrid);
      const isValidationMode = false;
      const isSudokuTemplateOpen = false;

      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
        isValidationMode,
        isSudokuTemplateOpen,
      };
    }

    case types.FILL_BLOCK: {
      if (state.workingGrid && state.solvedGrid) {
        state.workingGrid[action.coords[0]][action.coords[1]] = action.value;
        if (compareArrays(state.workingGrid, state.solvedGrid)) alert('Completed!');
        return { ...state, workingGrid: [...state.workingGrid] as TGrid };
      }
      return state;
    }

    case types.SELECT_BLOCK:
      return { ...state, selectedBlock: action.coords };

    case types.UNSELECT_BLOCK:
      return { ...state, selectedBlock: undefined };

    case types.ENABLE_VALIDATION:
      return { ...state, isValidationMode: true };

    case types.DISABLE_VALIDATION:
      return { ...state, isValidationMode: false };

    case types.DISPLAY_SUDOKU_TEMPLATE:
      return { ...state, isSudokuTemplateOpen: true };

    case types.HIDE_SUDOKU_TEMPLATE:
      return { ...state, isSudokuTemplateOpen: false };

    default:
      return state;
  }
};
