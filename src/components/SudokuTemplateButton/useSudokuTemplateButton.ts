import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { IReducer, displaySudokuTemplate, hideSudokuTemplate, unselectBlock } from 'store';

interface IStateSudokuTemplateButton {
  isSudokuTemplateOpen?: boolean;
}

export const useSudokuTemplateButton = () => {
  const state = useSelector<IReducer, IStateSudokuTemplateButton>(({ isSudokuTemplateOpen }) => ({
    isSudokuTemplateOpen,
  }));
  const dispatch = useDispatch<Dispatch>();

  const toggleSudokuTemplate = () => {
    state.isSudokuTemplateOpen ? dispatch(hideSudokuTemplate()) : dispatch(displaySudokuTemplate());
    dispatch(unselectBlock());
  };
  return { toggleSudokuTemplate };
};
