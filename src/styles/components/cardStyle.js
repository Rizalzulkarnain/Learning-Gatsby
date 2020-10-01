import styled from "styled-components"
import theme from "../theme"

export const Card = styled.div`
  width: 300px;
  height: 225px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-rows: 1 fr 1fr;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  }

  img {
    position: absolute;
    top: 0;
    height: 110%;
    z-index: -1;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    :hover {
      transform: translateY(-20px);
    }
  }

  h3 {
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.xl};
    margin: 20px 0 0 2px;
    width: 190px;
  }

  p {
    color: ${theme.colors.darkWhite};
    text-transform: uppercase;
    font-weight: 600;
    font-size: ${theme.fontSizes.md};
    align-self: end;
    margin: 0 0 20px 20px;
  }
`
