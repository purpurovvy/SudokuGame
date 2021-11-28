import { S } from 'components';
import { useSudokuTemplateButton } from './useSudokuTemplateButton';

export const SudokuTemplateButton = () => {
  const { toggleSudokuTemplate } = useSudokuTemplateButton();
  return <S.Button onClick={toggleSudokuTemplate}>Import Template</S.Button>;
};
