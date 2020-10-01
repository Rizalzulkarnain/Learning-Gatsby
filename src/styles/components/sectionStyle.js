import styled from "styled-components"
import theme from "../theme"
import { mediaMax } from "../media"

export const SectionGroup = styled.div`
  background: url(${({ image }) => image});
  height: 720px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;

  ${mediaMax.tablet`
    grid-template-columns: 1fr;
  `}
`
export const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -10px;
  transform: rotate(180deg);
`

export const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -8px;
`

export const SectionLogo = styled.img`
  align-self: end;
  width: 128px;
  margin: 0 auto;
`

export const SectionTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  margin: 0 40px;
  grid-gap: 20px;
  grid-template-columns: auto 100%;

  ${mediaMax.tablet`
    grid-template-columns: 1fr;
  `};
`

export const SectionTitle = styled.h3`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xxl};
  margin: 0;
  line-height: 1.2;

  ${mediaMax.tablet`
    font-size: ${theme.fontSizes.xl};
  `}
`

export const SectionText = styled.p`
  color: ${theme.colors.white};
`
