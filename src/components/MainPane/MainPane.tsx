import React from 'react';
import { S, SudokuTemplate, Grid, NavigationPanel } from 'components';
import { useSelector } from 'react-redux';
import { IReducer } from 'store';

interface IStateMainPane {
  isSudokuTemplateOpen?: boolean;
}

export const MainPane = () => {
  const state = useSelector<IReducer, IStateMainPane>(({ isSudokuTemplateOpen }) => ({
    isSudokuTemplateOpen,
  }));
  return (
    <S.Content>
      <S.Title>Sudoku</S.Title>
      <S.Card>
        <NavigationPanel />
        <Grid />
      </S.Card>
      {state.isSudokuTemplateOpen && <SudokuTemplate />}
    </S.Content>
  );
};
