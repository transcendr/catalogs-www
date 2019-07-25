import React from "react"

import "styles/components/MobileMenu.scss"

const MobileMenu = ({ isOpen }) => (
  <>
    <div className={`mobile_menu ${isOpen ? "isOpen" : ""}`}>
      <div className="mobile_menu__item">
        <div>Create Your Account Free!</div>
      </div>
    </div>
  </>
)

export default MobileMenu
