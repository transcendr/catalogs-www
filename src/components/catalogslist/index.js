import React from "react"
import CatalogsListFilter from "./ListFilter"
import CatalogsList from "./CatalogsList"
import "styles/components/CatalogsList.scss"

const Catalogs = () => (
  <div className="catalogs_list">
    <div className="clist__container">
      <div className="w-layout-grid grid">
        <CatalogsListFilter />
        <div className="clist__grid">
          <CatalogsList />
        </div>
      </div>
    </div>
  </div>
)

export default Catalogs
