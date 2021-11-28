import styled, { css } from 'styled-components';

export const GridContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.625rem 0;
`;

export const RowStyled = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row;

    &:nth-child(1) {
      & > div {
        border-top: solid 0.25rem ${theme.colors.black};
      }
    }
    &:nth-child(3),
    &:nth-child(6) {
      & > div {
        border-bottom: solid 0.1875rem ${theme.colors.black};
      }
    }
    &:nth-child(9) {
      border-bottom: solid 0.25rem ${theme.colors.black};
    }

    & > div {
      &:nth-child(1) {
        border-left: solid 0.25rem ${theme.colors.black};
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        border-right: solid 0.25rem ${theme.colors.black};
      }
      &:nth-child(4),
      &:nth-child(7) {
        border-left: none;
      }
    }
  `}
`;
