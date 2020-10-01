import React from "react"
import Wave from "../components/wave"

import {
  SectionGroup,
  WaveTop,
  WaveBottom,
  SectionLogo,
  SectionTitleGroup,
  SectionTitle,
  SectionText,
} from "../styles"

const Section = ({ image, logo, title, text }) => {
  return (
    <SectionGroup image={image}>
      <WaveTop>
        <Wave />
      </WaveTop>
      <WaveBottom>
        <Wave />
      </WaveBottom>
      <SectionLogo src={logo} />
      <SectionTitleGroup>
        <SectionTitle>{title}</SectionTitle>
        <SectionText>{text}</SectionText>
      </SectionTitleGroup>
    </SectionGroup>
  )
}

export default Section
