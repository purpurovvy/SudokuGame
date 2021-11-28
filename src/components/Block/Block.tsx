import React, { FC } from 'react';
import { NumberPanel } from 'components';
import { useBlock } from './useBlock';
import { BlockStyled } from './BlockStyled';
import { IBlock } from './useBlock';

export const Block: FC<IBlock> = ({ colIndex, rowIndex }) => {
  const { handleClick, isActive, isPuzzle, isValid, value } = useBlock({ colIndex, rowIndex });
  return (
    <>
      <BlockStyled isActive={isActive} onClick={handleClick} isPuzzle={isPuzzle} isValid={isValid}>
        {value === 0 ? '' : value}
        {isActive && <NumberPanel />}
      </BlockStyled>
    </>
  );
};
