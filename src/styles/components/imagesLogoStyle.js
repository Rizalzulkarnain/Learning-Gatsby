import styled from "styled-components"
import { mediaMax } from "../media"

export const Logo = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 40px;
  margin: 60px 0;
  justify-items: center;

  ${mediaMax.phablet`
    grid-template-columns: repeat(3, 1fr);
  `}
`

export const LogoImage = styled.div`
  width: 50px;
  position: relative;
  z-index: 99;
`
