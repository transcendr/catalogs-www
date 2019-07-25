import PropTypes from "prop-types"
import React from "react"

import "styles/components/header.scss"

const HeaderSearchField = () => (
  <div className="header__search_form">
    <form>
      <input
        className="header__search_field"
        type="text"
        placeholder="Search Thousands of Catalogs..."
      />
    </form>
  </div>
)

HeaderSearchField.propTypes = {
  siteTitle: PropTypes.string,
}

export default HeaderSearchField
