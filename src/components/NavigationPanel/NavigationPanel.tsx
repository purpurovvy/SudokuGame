import { S, ValidationButton, SudokuTemplateButton } from 'components';
import React from 'react';
import { useGrid } from '../Grid/useGrid';

export const NavigationPanel = () => {
  const { createGrid } = useGrid();

  return (
    <S.ContentHorizontal>
      <S.Button onClick={createGrid}>New Game</S.Button>
      <ValidationButton />
      <SudokuTemplateButton />
    </S.ContentHorizontal>
  );
};
