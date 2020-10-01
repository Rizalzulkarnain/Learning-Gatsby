import styled, { keyframes } from "styled-components"
import theme from "../theme"
import { mediaMax } from "../media"
import wallpaper3 from "../../images/wallpaper3.jpg"

const HeroAnimation = keyframes`
 0% { 
   opacity: 0; 
   transform: translateY(20px) 
   }

 100% { 
   opacity: 1; 
   transform: translateY(0px);  
   }
`

export const Hero = styled.div`
  background-image: url(${wallpaper3});
  height: 1000px;
  background-size: cover;
  background-position: center;
  position: relative;

  h1 {
    margin: 0;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.xxl};
    line-height: 1.2;
    opacity: 0;
    animation-name: ${HeroAnimation};
    animation-duration: 3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);

    ${mediaMax.phablet`
      font-size: ${theme.fontSizes.xl}
    `}
  }

  p {
    color: ${theme.colors.darkWhite};
    font-size: ${theme.fontSizes.xl};
    opacity: 0;
    animation-name: ${HeroAnimation};
    animation-duration: 3s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);

    ${mediaMax.phablet`
      font-size: ${theme.fontSizes.lg};
    `}
  }

  a {
    font-size: ${theme.colors.md};
    font-weight: 600;
    color: ${theme.colors.white};
    text-transform: uppercase;
    background: ${theme.colors.dark};
    padding: 9px 20px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    :hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
    }
  }

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

export const HeroGroup = styled.div`
  margin: 0 auto;
  max-width: 500px;
  padding: 150px 50px;
  text-align: center;

  ${mediaMax.phablet`
    padding: 100px 20px;
  `};
`

export const Cards = styled.div`
  h2 {
    margin: 50px 20px;
    font-size: ${theme.fontSizes.xxl};
    text-align: center;
    font-weight: 700;
    background: linear-gradient(104deg, #050a27 0%, #4a54bc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const CardGroup = styled.div`
  margin: 50px 40px 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  justify-items: center;

  ${mediaMax.desktopXL`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${mediaMax.tablet`
    grid-template-columns: repeat(1, 1fr);
  `}
`

export const SectionCaption = styled.div`
  font-weight: 600;
  font-size: ${theme.fontSizes.lg};
  text-transform: uppercase;
  color: #94aaba;
  text-align: center;
`

export const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  ${mediaMax.tablet`
    grid-template-columns: repeat(1, 1fr);  
  `};
`
