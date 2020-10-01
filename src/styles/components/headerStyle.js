import styled from "styled-components"
import mixins from "../mixins"
import theme from "../theme"
import { mediaMax } from "../media"

export const HeaderHero = styled.div`
  position: fixed;
  width: 100%;
  padding: 8px 0;
  z-index: 100;
  background-color: ${theme.colors.black};

  img {
    width: 50px;
  }

  a {
    color: ${theme.colors.white};
    font-weight: 700;
  }

  button {
    padding: 8px 20px;
    font-size: ${theme.fontSizes.lg};
    background: ${theme.colors.blue};
    border: none;
    outline: none;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s cubic-bezier(0.2, 0.8, 8.2, 1);

    :hover {
      background-color: ${theme.colors.white};
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
      transform: translateY(-3px);
    }
  }

  ${mediaMax.phablet`
    padding: 15px 0;
  `};
`

export const HeaderHeroGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  ${mixins.NavbarCenter}

  ${mediaMax.phablet`
    grid-template-column: repeat(4, auto);

     &:nth-child(4)  {
        display: none;
      }
  `};
`
