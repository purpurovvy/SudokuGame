import React, { FC, Children, useEffect } from 'react';
import { TIndex } from 'global/typings';
import { useGrid } from './useGrid';
import { Block } from '../';
import { GridContainerStyled, RowStyled } from './GridStyled';

export const Grid: FC = () => {
  const { solvedGrid, createGrid } = useGrid();

  useEffect(() => {
    if (!solvedGrid) {
      createGrid();
    }
  }, [createGrid, solvedGrid]);

  return (
    <GridContainerStyled>
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <RowStyled>
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => <Block colIndex={colIndex as TIndex} rowIndex={rowIndex as TIndex} />),
            )}
          </RowStyled>
        )),
      )}
    </GridContainerStyled>
  );
};
