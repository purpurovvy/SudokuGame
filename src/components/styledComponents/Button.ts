import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.black};
    border: 0.125rem solid ${theme.colors.black};
    color: ${theme.colors.white};
    cursor: pointer;
    display: flex;
    margin: 0.0625rem;
    font-size: 1.2rem;
    font-weight: bold;
    justify-content: center;
    opacity: 0.9;
    transition: ${theme.transition};
    flex: 1;

    &:focus {
      outline: none;
    }

    &:hover {
      opacity: 0.6;
    }
  `}
`;
