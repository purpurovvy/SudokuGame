import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { IReducer, selectBlock, unselectBlock } from 'store';
import { TDigitsZeroIncluded, TGrid, TIndex } from 'global/typings';

export interface IBlock {
  colIndex: TIndex;
  rowIndex: TIndex;
}

interface IStateBlock {
  isActive: boolean;
  value: TDigitsZeroIncluded;
  isPuzzle: boolean;
  isValid: boolean;
}

export const useBlock = ({ colIndex, rowIndex }: IBlock) => {
  const validateInput = (workingGrid?: TGrid, solvedGrid?: TGrid, isValidationMode?: boolean): boolean => {
    if (isValidationMode && workingGrid && solvedGrid) {
      if (solvedGrid[rowIndex][colIndex] !== workingGrid[rowIndex][colIndex] && workingGrid[rowIndex][colIndex] !== 0) {
        return false;
      }
      return true;
    }
    return true;
  };

  const state = useSelector<IReducer, IStateBlock>(
    ({ challengeGrid, workingGrid, selectedBlock, isValidationMode, solvedGrid }) => ({
      isActive: selectedBlock ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex : false,
      isPuzzle: challengeGrid && challengeGrid[rowIndex][colIndex] !== 0 ? true : false,
      value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
      isValid: validateInput(workingGrid, solvedGrid, isValidationMode),
    }),
  );
  const dispatch = useDispatch<Dispatch>();

  const handleClick = () => {
    if (!state.isActive && !state.isPuzzle) {
      dispatch(selectBlock([rowIndex, colIndex]));
    }
    if (state.isActive && !state.isPuzzle) {
      dispatch(unselectBlock());
    }
  };
  return {
    handleClick,
    isActive: state.isActive,
    isPuzzle: state.isPuzzle,
    isValid: state.isValid,
    value: state.value,
  };
};
