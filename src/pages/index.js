import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Section from "../components/section"
import Wave from "../components/wave"
import ImagesLogo from "../components/imagesLogo"
import Cell from "../components/cell"

import {
  Hero,
  HeroGroup,
  Cards,
  CardGroup,
  SectionCaption,
  SectionCellGroup,
} from "../styles"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords="react, online learning, course" />
    <Hero>
      <HeroGroup>
        <h1>
          Learn to <br /> design and code React Apps
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          fugit inventore commodi culpa laboriosam nostrum omnis reiciendis
          animi, mollitia molestias voluptatem, fugiat iure.
        </p>
        <Link to="/page-2/">Watch the video</Link>
        <ImagesLogo />
        <Wave />
      </HeroGroup>
    </Hero>
    <Cards>
      <h2>11 Courses more coming</h2>
      <CardGroup>
        <Card
          title="Design System"
          text="10 Sections"
          image={require("../images/wallpaper.jpg")}
        />
        <Card
          title="React for Designer"
          text="12 Sections"
          image={require("../images/wallpaper2.jpg")}
        />
        <Card
          title="Sound Design"
          text="5 Sections"
          image={require("../images/wallpaper3.jpg")}
        />
        <Card
          title="ARKIT 2"
          text="10 Sections"
          image={require("../images/wallpaper4.jpg")}
        />
      </CardGroup>
    </Cards>
    <Section
      image={require("../images/wallpaper2.jpg")}
      logo={require("../images/logo-react.png")}
      title="React for Designer"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aut voluptatum voluptate tempore, sed similique officia animi sit velit aspernatur harum, eveniet odio atque eius voluptates dolor. Quisquam reiciendis inventore, repellendus rerum laudantium itaque eos doloremque quidem et mollitia libero."
    />
    <SectionCaption>12 Section - 6 Hours</SectionCaption>
    <SectionCellGroup>
      <Cell />
    </SectionCellGroup>
  </Layout>
)

export default IndexPage
