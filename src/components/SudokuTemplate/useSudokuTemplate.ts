import React, { useState } from 'react';
import { useRegex, regexPatterns } from 'utils';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { createGrid, hideSudokuTemplate } from 'store';

export const useSudokuTemplate = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [template, setTemplate] = useState(`{
    "[1][1]": 1,
    "[1][2]": 2,
    "[5][5]": 6,
    "[4][7]": 9
}`);
  const dispatch = useDispatch<Dispatch>();
  const blockValidation = useRegex(regexPatterns.sudokuBlockPointer);
  const validateInput = (sudokuTemplateInput: string) => {
    try {
      const sudokuTemplateObj = JSON.parse(sudokuTemplateInput);
      const values = filterValidInputs(sudokuTemplateObj);
      if (Object.keys(values).length === 0) {
        const errorMsg = 'Input doesn\'t have valid values';
        throw errorMsg;
      }
      return values;
    } catch (error) {
      setErrorMessage(typeof error === 'string' ? error : 'Your template doesn\'t fit schema');
      console.error(error);
    }
  };
  const filterValidInputs = (input: { [key: string]: string }) => {
    const allowedSudokuValues = { min: 0, max: 9 };
    const listOfInputKeys = Object.keys(input)
      .filter((key) => blockValidation(key))
      .filter((validKey) => {
        const value = parseInt(input[validKey]);
        return value >= allowedSudokuValues.min && value <= allowedSudokuValues.max;
      })
      .map((key) => `${key}:${input[key]}`);

    return listOfInputKeys;
  };

  const closeCard = (): void => {
    dispatch(hideSudokuTemplate());
  };

  const submitCustomTemplate = (event?: React.SyntheticEvent): void => {
    setErrorMessage('');
    event?.preventDefault();
    const parsedInput = validateInput(template);
    if (parsedInput) {
      dispatch(createGrid(parsedInput));
    }
  };

  const handleTextInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTemplate(e.target.value);
  };

  return { template, errorMessage, submitCustomTemplate, handleTextInputChange, closeCard };
};
