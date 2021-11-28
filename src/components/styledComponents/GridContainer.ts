import styled, { css } from 'styled-components';

export const GridContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    position: absolute;
    top: calc(100% + 0.125rem);
    z-index: 10;
    background-color: ${theme.colors.white};
    border: solid 0.0625rem ${theme.colors.black};
    padding: 0.25rem;
    box-shadow: ${theme.shadow};
  `}
`;
