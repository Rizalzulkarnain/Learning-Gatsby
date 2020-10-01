import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { HeaderHero, HeaderHeroGroup } from "../styles"

const Header = ({ siteTitle }) => (
  <HeaderHero>
    <HeaderHeroGroup>
      <Link to="/">
        <img src={require("../images/logo-designcode.svg")} alt="logo" />
      </Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshop">Workshop</Link>
      <Link to="/buy">
        <button>Buy</button>
      </Link>
    </HeaderHeroGroup>
  </HeaderHero>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
