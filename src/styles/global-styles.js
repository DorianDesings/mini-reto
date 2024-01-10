import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body{
    background-color: #111;
    color: ${COLORS.primary}
  }
`;
