import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
import { cache } from "apollo/cache"
import { resolvers, typeDefs } from "apollo/resolvers"

let apiBaseURL = `http://graphql.catalogshub.com/catalogs`

const defaultClientData = {
  data: {
    sidebarOpen: false,
    filteredCatalogs: [
      { coverUrl: "cover1", __typename: "FilteredCatalog" },
      { coverUrl: "cover2", __typename: "FilteredCatalog" },
    ],
  },
}

if (typeof window !== "undefined") {
  cache.writeData(defaultClientData)
}

export const client = new ApolloClient({
  uri: apiBaseURL,
  cache,
  fetch,
  typeDefs,
  resolvers,
})

if (typeof window !== "undefined") {
  window.__APOLLO_CLIENT__ = client
}
