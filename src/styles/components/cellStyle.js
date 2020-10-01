import styled from "styled-components"
import theme from "../theme"

export const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;
  align-items: center;
`

export const CellTitle = styled.h3`
  font-size: ${theme.fontSizes.lg};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px 0;
`

export const CellImage = styled.div`
  width: 60px;
  height: 60px;
  background: ${theme.colors.black};
  border-radius: 10px;
`
