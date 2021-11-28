import React, { FC } from 'react';
import { S } from 'components';
import { useValidationButton } from './useValidationButton';

export const ValidationButton: FC = () => {
  const { toggleValidation, isValidationMode } = useValidationButton();
  return <S.Button onClick={toggleValidation}>{isValidationMode ? 'Validate: ON' : 'Validate: OFF'}</S.Button>;
};
