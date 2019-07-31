import gql from "graphql-tag"
import {
  SIDEBAR_OPEN,
  GET_CATALOGS,
  GET_FILTERED_CATALOGS,
  FILTERED_DEPARTMENTS,
} from "./queries"

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
    updateFilteredDepartments(name: String): [FilteredCatalog]
    filterByKeyword(keyword: String): [FilteredCatalog]
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
    updateFilteredDepartments: (_, { name }, { cache }) => {
      let filteredCatalogs = [],
        filteredDepartments = []

      // Read currently selected department filters from cache
      let { filteredDepartments: selectedDepartments } = cache.readQuery({
        query: FILTERED_DEPARTMENTS,
      })

      // Assign currently selected to fd object
      filteredDepartments = selectedDepartments // [automotive, babies, etc...]

      // Check if the actioned item is already in the selected list
      if (filteredDepartments.includes(name)) {
        // Remove it from filtered departments
        filteredDepartments = filteredDepartments.filter(x => x !== name)
        // Write back to cache with updated list
        cache.writeQuery({
          query: FILTERED_DEPARTMENTS,
          data: {
            filteredDepartments,
          },
        })
      } else {
        // Add it to filtered depts
        filteredDepartments.push(name)
        // Write back to cache with updated list
        cache.writeQuery({
          query: FILTERED_DEPARTMENTS,
          data: {
            filteredDepartments,
          },
        })
      }

      // Update filtered catalogs
      const { catalogListings: catalogs } = cache.readQuery({
        query: GET_CATALOGS,
      })

      try {
        // If unfiltered, set to all available catalogs
        if (filteredDepartments.length === 0) {
          filteredCatalogs = catalogs
        } else {
          // For each filter, retrieve matching dept catalogs
          filteredDepartments.forEach(deptNameUrl => {
            let matches = catalogs.filter(
              x => x.departmentByPrimaryDepartment.nameUrl === deptNameUrl
            )
            filteredCatalogs = filteredCatalogs.concat(matches)
          })
        }
      } catch (e) {
        console.warn(e)
      }

      // Change each item's __typename
      filteredCatalogs = filteredCatalogs.map(x => {
        x.__typename = "FilteredCatalog"
        return x
      })

      try {
        // Write new filtered catalogs to cache
        cache.writeQuery({
          query: GET_FILTERED_CATALOGS,
          data: {
            filteredCatalogs,
          },
        })
      } catch (e) {
        console.warn(e)
      }

      return filteredCatalogs
    },
    filterByKeyword: (_, { keyword }, { cache }) => {
      const selectedCatalogs = []
      // Retrieve all catalogs from cache
      const { catalogListings: catalogs } = cache.readQuery({
        query: GET_CATALOGS,
      })
      // Check match keyword to catalog props
      catalogs.forEach(catalog => {
        const {
          catalogTitle,
          departmentByPrimaryDepartment: { description, altText },
        } = catalog
        const checkMatch = string => {
          const check = keyword.toLowerCase()
          string = string.toLowerCase()
          return string.includes(check)
        }
        if (
          checkMatch(catalogTitle) ||
          checkMatch(description) ||
          checkMatch(altText)
        ) {
          selectedCatalogs.push(catalog)
        }
      })

      // If there is no matches because keyword is empty
      // return all catalogs
      if (selectedCatalogs.length === 0 && !keyword) {
        selectedCatalogs = catalogs
      }

      // Generate filtered catalogs array from matches w/ proper typename
      const filteredCatalogs = selectedCatalogs.map(x => {
        x.__typename = "FilteredCatalog"
        return x
      })

      // Write filtered catalogs to cache
      try {
        // Write new filtered catalogs to cache
        cache.writeQuery({
          query: GET_FILTERED_CATALOGS,
          data: {
            filteredCatalogs,
          },
        })
      } catch (e) {
        console.warn(e)
      }

      return filteredCatalogs
    },
    updateFilteredCatalogs: (_, { data: filteredCatalogs }, { cache }) => {
      try {
        cache.writeQuery({
          query: GET_FILTERED_CATALOGS,
          data: {
            filteredCatalogs,
          },
        })
      } catch (e) {
        console.warn(e)
      }
      return filteredCatalogs
    },
  },
}
