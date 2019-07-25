import { gql } from "apollo-boost"

export const SIDEBAR_OPEN = gql`
  query IsSidebarOpen {
    sidebarOpen @client
  }
`
