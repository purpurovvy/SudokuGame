import React, { FC } from 'react';
import { S } from 'components';
import { useNumberButton, INumberButton } from './useNumberButton';

export const NumberButton: FC<INumberButton> = ({ value }) => {
  const { fill } = useNumberButton({ value });
  return <S.Button onClick={fill}>{value}</S.Button>;
};
