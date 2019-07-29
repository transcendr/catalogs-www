import React, { useState } from "react"
import { Query } from "react-apollo"
import CatalogsListFilter from "./ListFilter"
import CatalogsList from "./CatalogsList"
import { GET_CATALOGS } from "apollo/queries"

import "styles/components/CatalogsList.scss"

const LoadingCatalogs = () => (
  <>
    <p>Loading Catalogs...</p>
  </>
)

const Catalogs = () => {
  const [catalogs, setCatalogs] = useState([])

  const _setCatalogs = data => {
    if (!data.catalogListings) return []
    const { catalogListings } = data
    setCatalogs(catalogListings)
    return catalogListings
  }

  return (
    <div className="catalogs_list">
      <div className="clist__container">
        <div className="w-layout-grid grid">
          <CatalogsListFilter />
          <div className="clist__grid">
            <Query query={GET_CATALOGS} notifyOnNetworkStatusChange>
              {({ loading, error, data, refetch, networkStatus, _client }) => {
                if (loading) return <LoadingCatalogs />
                console.log("RETRIEVED DATA", data)
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
