import PropTypes from "prop-types"
import React from "react"
import { ImageLogo } from "components/images"
import CTA from "./CTA"
import HeaderSearchField from "./Search"

import "styles/components/header.scss"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__container">
      <div className="header__logo">
        <ImageLogo />
      </div>
      <div className="header__search">
        <HeaderSearchField />
      </div>
      <div className="header__login">
        <CTA />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
