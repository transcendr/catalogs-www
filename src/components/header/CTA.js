import React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
// import { client } from "apollo/client"
// import { SIDEBAR_OPEN } from "apollo/queries"

const CTA = ({ toggleMenu }) => {
  const TOGGLE_SIDEBAR = gql`
    mutation toggleSidebar {
      toggleSidebar @client
    }
  `

  const toggleSidebar = mutate => {
    mutate()
    toggleMenu()
  }

  return (
    <>
      <button className="cta">Join Free</button>
      <img
        className="favorite"
        src="/images/icon-heart-inactive.png"
        alt="Share"
      />
      <Mutation mutation={TOGGLE_SIDEBAR}>
        {mutate => (
          <>
            <img
              onClick={() => toggleSidebar(mutate)}
              className="menu"
              src="/images/icon-menu.png"
              alt="Menu"
            />
          </>
        )}
      </Mutation>
    </>
  )
}
export default CTA
