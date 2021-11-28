import { createGlobalStyle, css } from 'styled-components';
import { themeType } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: themeType }>`
  ${({ theme }) => css`
    html {
      font-size: 16px;
      height: 100vh;
      max-height: -webkit-fill-available;

      body {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;

        #root {
          background: ${theme.colors.background};
          color: ${theme.colors.black};
          display: flex;
          font-family: sans-serif;
          height: 100%;
          justify-content: center;
        }
      }
    }
  `}
`;
