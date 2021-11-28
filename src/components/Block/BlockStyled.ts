import styled, { css } from 'styled-components';

interface IBlockStyled {
  isActive?: boolean;
  isPuzzle?: boolean;
  isValid?: boolean;
}
export const BlockStyled = styled.div<IBlockStyled>`
  ${({ isActive, isPuzzle, isValid, theme }) => css`
    align-items: center;
    background-color: ${isPuzzle ? theme.colors.darkgray : isActive ? theme.colors.blue : theme.colors.white};
    border: solid 0.0625rem ${theme.colors.black};
    cursor: pointer;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    font-size: 1.25rem;
    font-weight: ${isPuzzle ? 'bold' : 'normal'};
    color: ${isValid ? (isPuzzle ? 'white' : 'black') : 'red'};
    height: auto;
    justify-content: center;
    transition: ${theme.transition};
    user-select: none;
    position: relative;

    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }

    &:hover {
      background-color: ${!isPuzzle && theme.colors.lightBlue};
      cursor: ${isPuzzle && 'not-allowed'};
    }
  `}
`;
