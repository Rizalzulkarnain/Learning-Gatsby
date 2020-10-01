import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import { FooterGroup, Text, Button, LinkGroup, Copyright } from "../styles"

const Footer = () => {
  const footerData = useStaticQuery(graphql`
    query {
      allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
        edges {
          node {
            id
            slug
            title
          }
        }
      }
    }
  `)

  return (
    <FooterGroup>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores id
        magni quisquam, consequuntur ea veniam.
      </Text>
      <Button>Tweet</Button>
      <LinkGroup>
        {footerData.allContentfulLink.edges.map(text => (
          <Link to={`${text.node.slug}`} key={text.node.id}>
            {text.node.title}
          </Link>
        ))}
      </LinkGroup>
      <Copyright>
        <footer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit
          magni obcaecati sequi et animi.
          <a href="mailto:naenroo@gmail.com">Email Us</a>
          <br />
          Copyright@ {new Date().getFullYear()}
        </footer>
      </Copyright>
    </FooterGroup>
  )
}

export default Footer
