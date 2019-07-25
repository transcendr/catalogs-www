import gql from "graphql-tag"
import { SIDEBAR_OPEN } from "./queries"

export const typeDefs = gql`
  extend type Query {
    sidebarOpen: Boolean!
  }

  extend type Mutation {
    toggleSidebar: Boolean
  }
`

export const resolvers = {
  Mutation: {
    closeSidebar: (_, __, { cache }) => {
      const data = {
        sidebarOpen: false,
      }
      cache.writeQuery({ query: SIDEBAR_OPEN, data })
      return data.sidebarOpen
    },
    toggleSidebar: (_, __, { cache }) => {
      const { sidebarOpen } = cache.readQuery({ query: SIDEBAR_OPEN })
      const data = {
        sidebarOpen: !sidebarOpen,
      }
      cache.writeQuery({ query: SIDEBAR_OPEN, data })
      return data.sidebarOpen
    },
  },
}
