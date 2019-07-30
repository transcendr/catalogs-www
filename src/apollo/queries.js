import { gql } from "apollo-boost"

export const SIDEBAR_OPEN = gql`
  query IsSidebarOpen {
    sidebarOpen @client
  }
`
export const FILTERED_DEPARTMENTS = gql`
  query GetFilteredDepartments {
    filteredDepartments @client
  }
`

export const GLIDER_COVERS = gql`
  query GetGliderCovers {
    gliderCovers @client
  }
`

export const GET_CATALOGS = gql`
  query GetAllCatalogs {
    catalogListings(condition: { current: true, viewable: 0 }) {
      coverUrl
      class
      current
      catalogTitle
      departmentByPrimaryDepartment {
        id
        description
        nameUrl
        altText
      }
    }
  }
`

export const GET_FILTERED_CATALOGS = gql`
  query GetFilteredCatalogs {
    filteredCatalogs @client {
      coverUrl @client
      class @client
      current @client
      catalogTitle @client
      departmentByPrimaryDepartment @client {
        id @client
        description @client
        nameUrl @client
        altText @client
      }
    }
  }
`
