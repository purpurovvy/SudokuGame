import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { createGrid, IReducer } from 'store';
import { TGrid } from 'global/typings';

interface IStateGrid {
  solvedGrid?: TGrid;
}

export const useGrid = () => {
  const state = useSelector<IReducer, IStateGrid>(({ solvedGrid }) => ({
    solvedGrid,
  }));
  const dispatch = useDispatch<Dispatch>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);

  return { solvedGrid: state.solvedGrid, createGrid: create };
};
