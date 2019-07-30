import React from "react"
import gql from "graphql-tag"
import { client } from "apollo/client"
import { GET_CATALOGS } from "apollo/queries"
import { departmentNameByNameUrl } from "utils/departments"

import "styles/components/CatalogsList.scss"
import { Mutation } from "react-apollo"

const FilterItem = ({ name, nameUrl }) => {
  const UPDATE_FILTERED_DEPARTMENTS = gql`
    mutation updateFilteredDepartments($name: String) {
      updateFilteredDepartments(name: $name) @client
    }
  `
  return (
    <div className="clist__item">
      <div>
        <label className="w-checkbox">
          <Mutation mutation={UPDATE_FILTERED_DEPARTMENTS}>
            {mutate => {
              return (
                <input
                  className="w-checkbox-input"
                  type="checkbox"
                  onClick={() =>
                    mutate({
                      variables: { name: nameUrl },
                    })
                  }
                />
              )
            }}
          </Mutation>

          <span className="hide w-form-label"></span>
        </label>
      </div>
      <div>{name}</div>
    </div>
  )
}

const buildFiltersFromCache = () => {
  try {
    const { catalogListings } = client.readQuery({
      query: GET_CATALOGS,
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
        return <FilterItem key={index} name={x.name} nameUrl={x.nameUrl} />
      })}
    </div>
  )
}

export default CatalogsListFilter
