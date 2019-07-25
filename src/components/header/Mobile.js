// import PropTypes from "prop-types"
import React, { useState } from "react"
import { ImageLogo } from "components/images"
import CTA from "./CTA"
import MobileMenu from "./Menu"

import "styles/components/header.scss"

const HeaderMobile = () => {
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!isOpen)
  }

  return (
    <header className="header_mobile">
      <div className="header__container">
        <div className="header__logo">
          <ImageLogo />
        </div>
        <div className="header__search"></div>
        <div className="header__login">
          <CTA toggleMenu={toggleMenu} />
        </div>
      </div>
      <MobileMenu isOpen={isOpen} />
    </header>
  )
}

HeaderMobile.propTypes = {}

HeaderMobile.defaultProps = {}

export default HeaderMobile
