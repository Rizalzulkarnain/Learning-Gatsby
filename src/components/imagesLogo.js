import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Logo, LogoImage } from "../styles"

const ImagesLogo = () => {
  const images = useStaticQuery(graphql`
    query {
      allDataImageJson {
        edges {
          node {
            id
            imageLogo {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Logo>
      {images.allDataImageJson.edges.map(logo => (
        <div key={logo.node.id}>
          {logo.node.title}
          <LogoImage>
            <Img fluid={logo.node.imageLogo.childImageSharp.fluid} />
          </LogoImage>
        </div>
      ))}
    </Logo>
  )
}

export default ImagesLogo
