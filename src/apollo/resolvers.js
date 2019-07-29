import gql from "graphql-tag"
import { SIDEBAR_OPEN, GET_FILTERED_CATALOGS } from "./queries"

export const typeDefs = gql`
  type FilteredCatalog {
    coverUrl: String
  }

  extend type Query {
    sidebarOpen: Boolean!
    filteredCatalogs: [Catalog]
  }

  extend type Mutation {
    toggleSidebar: Boolean
    setFilteredCatalogs: [FilteredCatalog]
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
    updateFilteredCatalogs: (_, { data }, { cache }) => {
      cache.writeQuery({ query: GET_FILTERED_CATALOGS, data })
      return data
    },
  },
}
