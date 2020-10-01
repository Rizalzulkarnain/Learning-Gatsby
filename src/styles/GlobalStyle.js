import { createGlobalStyle } from "styled-components"
import theme from "./theme"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    line-height: 1.3;
    font-family: ${theme.fonts.base};
    font-size: ${theme.fontSizes.xl};
  }

  a {
    color: ${theme.colors.purple};
    text-decoration: none;
    font-weight: 500; 
  }
`

export default GlobalStyle
