import React, { FC } from 'react';
import { TDigits } from 'global/typings';
import { S, NumberButton } from 'components';

export const NumberPanel: FC = () => (
  <S.GridContainer>
    {([1, 2, 3, 4, 5, 6, 7, 8, 9] as TDigits[]).map((value) => (
      <NumberButton key={value} value={value} />
    ))}
  </S.GridContainer>
);
