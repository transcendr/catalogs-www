import PropTypes from "prop-types"
import React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
// import { animateScroll as scroll } from "react-scroll"
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"

import "styles/components/header.scss"

const HeaderSearchField = () => {
  const scrollToTop = () => {
    // scroll.scrollToTop({ duration: 250 })
    scroller.scrollTo("scrollToSearch", {
      duration: 250,
      delay: 0,
      smooth: true,
      offset: -100, // Scrolls to element + 50 pixels down the page
    })
  }

  const UPDATE_FILTERED_KEYWORD = gql`
    mutation filterByKeyword($keyword: String) {
      filterByKeyword(keyword: $keyword) @client
    }
  `

  return (
    <div className="header__search_form">
      <form>
        <Mutation mutation={UPDATE_FILTERED_KEYWORD}>
          {mutate => {
            return (
              <input
                className="header__search_field"
                type="text"
                placeholder="Search Thousands of Catalogs..."
                onChange={({ target }) => {
                  console.log("Filtering by keyword", target.value)
                  mutate({
                    variables: { keyword: target.value },
                  })
                }}
                onClick={() => scrollToTop()}
              />
            )
          }}
        </Mutation>
      </form>
    </div>
  )
}

HeaderSearchField.propTypes = {
  siteTitle: PropTypes.string,
}

export default HeaderSearchField
