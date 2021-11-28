import styled, { css } from 'styled-components';

export const DefaultText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: justify;
  `}
`;
