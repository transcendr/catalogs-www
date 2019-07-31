import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
import { cache } from "apollo/cache"
import { resolvers, typeDefs } from "apollo/resolvers"
import {
  GET_CATALOGS,
  GET_FILTERED_CATALOGS,
  FILTERED_DEPARTMENTS,
  GLIDER_COVERS,
} from "apollo/queries"

let apiBaseURL = `https://gql.catalogshub.com/catalogs`

const defaultClientData = {
  data: {
    sidebarOpen: false,
    filteredCatalogs: [],
    filteredDepartments: [],
    filteredKeyword: "",
    gliderCovers: [],
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

// Query all catalogs on page load
client.query({ query: GET_CATALOGS }).then(result => {
  const {
    data: { catalogListings },
  } = result

  client.writeQuery({
    query: GET_FILTERED_CATALOGS,
    data: {
      filteredCatalogs: catalogListings,
    },
  })

  // Do not persist filters
  client.writeQuery({
    query: FILTERED_DEPARTMENTS,
    data: { filteredDepartments: [] },
  })

  // Setup glider covers
  const covers = catalogListings.map(
    x => `http://cdn.catalogs.com/flagship/img/covers/full/${x.coverUrl}`
  )
  client.writeQuery({
    query: GLIDER_COVERS,
    data: { gliderCovers: covers },
  })
})
