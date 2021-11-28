import styled, { css } from 'styled-components';

export interface INotificationStyled {
  mode: 'warning' | 'success' | 'error' | undefined;
  isVisible?: boolean;
}
export const NotificationStyled = styled.div<INotificationStyled>`
  ${({ theme, mode, isVisible }) => css`
    width: 90%;
    height: 2rem;
    background-color: ${mode === 'success'
      ? theme.colors.success
      : mode === 'error'
      ? theme.colors.error
      : theme.colors.warning};
    color: ${mode === 'warning' ? 'black' : 'white'};
    font-weight: bold;
    border-radius: ${theme.borderRadius};
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    box-shadow: ${theme.shadow};
    visibility: ${isVisible ? 'visible' : 'hidden'};
  `}
`;
