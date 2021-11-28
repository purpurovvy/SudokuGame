import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { IReducer, disableValidation, enableValidation } from 'store';

interface IStateValidationButton {
  isValidationMode?: boolean;
}

export const useValidationButton = () => {
  const state = useSelector<IReducer, IStateValidationButton>(({ isValidationMode }) => ({
    isValidationMode: isValidationMode,
  }));
  const dispatch = useDispatch<Dispatch>();

  const toggleValidation = () => {
    state.isValidationMode ? dispatch(disableValidation()) : dispatch(enableValidation());
  };
  return { toggleValidation, isValidationMode: state.isValidationMode };
};
