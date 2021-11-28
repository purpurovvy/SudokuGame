import styled from 'styled-components';

export const SudokuTemplateStyled = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TemplateInputStyled = styled.textarea`
  margin: 0.5rem;
  border: solid 0.125rem black;
  resize: none;
  width: 100%;
  min-height: 50vh;
  overflow-x: hidden;
`;

export const SudokuTemplateFormStyled = styled.form`
  display: flex;
  flexdirection: column;
`;
