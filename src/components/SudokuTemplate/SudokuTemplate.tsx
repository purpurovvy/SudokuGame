import React from 'react';
import { SudokuTemplateStyled, TemplateInputStyled,SudokuTemplateFormStyled } from './SudokuTemplateStyled';
import { S, Notification } from 'components';
import { useSudokuTemplate } from './useSudokuTemplate';

export const SudokuTemplate = () => {
  const { template, errorMessage, submitCustomTemplate, handleTextInputChange, closeCard } = useSudokuTemplate();
  return (
    <SudokuTemplateStyled>
      <S.Card>
        <Notification mode={'error'} isVisible={!!errorMessage} label={errorMessage} />
        <S.CardTitle>Paste your Sudoku template</S.CardTitle>
        <S.DefaultText>
          You can import your own sudoku template! Remember to provide right schema in JSON format. See example below.
        </S.DefaultText>
        <SudokuTemplateFormStyled>
          <TemplateInputStyled onChange={handleTextInputChange} value={template} />
        </SudokuTemplateFormStyled>
        <S.ContentHorizontal>
          <S.Button onClick={submitCustomTemplate}>Import</S.Button>
          <S.Button onClick={closeCard}>Cancel</S.Button>
        </S.ContentHorizontal>
      </S.Card>
    </SudokuTemplateStyled>
  );
};
