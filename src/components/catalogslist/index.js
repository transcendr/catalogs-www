import React, { useState } from "react"
import { Query } from "react-apollo"
import CatalogsListFilter from "./ListFilter"
import CatalogsList from "./CatalogsList"
import { GET_CATALOGS, GET_FILTERED_CATALOGS } from "apollo/queries"

import "styles/components/CatalogsList.scss"

const LoadingCatalogs = () => (
  <>
    <p>Loading Catalogs...</p>
  </>
)

const Catalogs = () => {
  const [catalogs, setCatalogs] = useState([])

  const _setCatalogs = data => {
    if (!data || !data.filteredCatalogs) return []
    const { filteredCatalogs } = data
    setCatalogs(filteredCatalogs)
    return filteredCatalogs
  }

  return (
    <div className="catalogs_list">
      <div className="clist__container">
        <div className="w-layout-grid grid">
          <CatalogsListFilter />
          <div className="clist__grid">
            <Query query={GET_FILTERED_CATALOGS} notifyOnNetworkStatusChange>
              {({ loading, error, data, refetch, networkStatus, _client }) => {
                if (loading) return <LoadingCatalogs />
                return <CatalogsList catalogs={_setCatalogs(data)} />
              }}
            </Query>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalogs
