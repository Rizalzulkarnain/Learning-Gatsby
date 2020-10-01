import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { CellGroup, CellImage, CellTitle } from "../styles"

const Cell = () => {
  const course = useStaticQuery(graphql`
    query {
      allDataJson {
        edges {
          node {
            id
            title
            imageCourse {
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
    <>
      {course.allDataJson.edges.map(course => (
        <CellGroup key={course.node.id}>
          <CellImage>
            <Img fluid={course.node.imageCourse.childImageSharp.fluid} />
          </CellImage>
          <CellTitle>{course.node.title}</CellTitle>
        </CellGroup>
      ))}
    </>
  )
}

export default Cell
