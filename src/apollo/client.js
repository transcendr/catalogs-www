import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
import { cache } from "apollo/cache"
import { resolvers, typeDefs } from "apollo/resolvers"

let apiBaseURL = `http://localhost:5001/catalogs-dev/us-central1/api/graphql`

const defaultClientData = {
  data: {
    sidebarOpen: false,
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
