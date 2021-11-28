import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { fillBlock, IReducer } from 'store';
import { TBlockCoords, TDigitsZeroIncluded, TDigits } from 'global/typings';

export interface INumberButton {
  value: TDigits;
}

interface IStateNumberButton {
  selectedBlock?: TBlockCoords;
  selectedValue: TDigitsZeroIncluded;
}

export const useNumberButton = ({ value }: INumberButton) => {
  const state = useSelector<IReducer, IStateNumberButton>(({ selectedBlock, workingGrid }) => ({
    selectedBlock,
    selectedValue: workingGrid && selectedBlock ? workingGrid[selectedBlock[0]][selectedBlock[1]] : 0,
  }));
  const dispatch = useDispatch<Dispatch>();

  const fill = useCallback(() => {
    if (state.selectedBlock) dispatch(fillBlock(value, state.selectedBlock));
  }, [dispatch, state.selectedBlock, value]);

  return { fill };
};
