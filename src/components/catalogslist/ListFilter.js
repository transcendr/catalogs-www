import React from "react"
import gql from "graphql-tag"
import { client } from "apollo/client"
import { GET_FILTERED_CATALOGS } from "apollo/queries"
import { departmentNameByNameUrl } from "utils/departments"

import "styles/components/CatalogsList.scss"

const FilterItem = ({ name }) => {
  return (
    <div className="clist__item">
      <div>
        <label className="w-checkbox">
          <input className="w-checkbox-input" type="checkbox" />
          <span className="hide w-form-label"></span>
        </label>
      </div>
      <div>{name}</div>
    </div>
  )
}

const buildFiltersFromCache = () => {
  try {
    const { filteredCatalogs } = client.readQuery({
      query: GET_FILTERED_CATALOGS,
    })
    console.log("Filtered", filteredCatalogs)
  } catch (e) {
    console.log("Get Filtered Failed", e)
  }

  // const query = gql`
  //   query GetFilteredCatalogs {
  //     filteredCatalogs @client {
  //       coverUrl
  //     }
  //   }
  // `

  // client.writeQuery({
  //   query: GET_FILTERED_CATALOGS,
  //   data: {
  //     filteredCatalogs: [
  //       { coverUrl: "cover3", __typename: "FilteredCatalog" },
  //       { coverUrl: "cover4", __typename: "FilteredCatalog" },
  //     ],
  //   },
  // })

  try {
    const { catalogListings } = client.readQuery({
      query: gql`
        query ReadCatalogs {
          catalogListings(condition: { current: true, viewable: 0 }) {
            coverUrl
            class
            current
            departmentByPrimaryDepartment {
              id
              description
              nameUrl
              altText
            }
          }
        }
      `,
    })

    // Write all to filtered state cache
    client.writeQuery({
      query: GET_FILTERED_CATALOGS,
      data: {
        filteredCatalogs: catalogListings,
      },
    })

    const filters = []
    const unsortedUrls = []
    const allUrls = []

    catalogListings.forEach(x => {
      const { nameUrl } = x.departmentByPrimaryDepartment
      if (!allUrls.includes(nameUrl)) {
        unsortedUrls.push(nameUrl)
      }
      allUrls.push(nameUrl)
    })

    const sortedUrls = unsortedUrls.sort()

    sortedUrls.forEach(nameUrl => {
      const name = departmentNameByNameUrl[nameUrl]
      filters.push({ name, nameUrl })
    })

    console.log("buildfilters", catalogListings, filters)

    const updated = client.readQuery({ query: GET_FILTERED_CATALOGS })
    console.log("######UPDATED", updated)

    return filters
  } catch (e) {
    return [{ name: "All Categories" }]
  }
}

const CatalogsListFilter = () => {
  const filters = buildFiltersFromCache()
  return (
    <div className="clist__categories">
      <div className="clist__categories_header">Categories</div>
      {filters.map((x, index) => {
        return <FilterItem key={index} name={x.name} />
      })}
    </div>
  )
}

export default CatalogsListFilter
