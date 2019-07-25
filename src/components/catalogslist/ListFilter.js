import React from "react"

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

const filters = [
  { name: "All Categories" },
  { name: "Babies" },
  { name: "[...]" },
  { name: "[...]" },
  { name: "[...]" },
  { name: "[...]" },
  { name: "[...]" },
  { name: "[...]" },
]

const CatalogsListFilter = () => (
  <div className="clist__categories">
    <div className="clist__categories_header">Categories</div>
    {filters.map((x, index) => {
      return <FilterItem key={index} name={x.name} />
    })}
  </div>
)

export default CatalogsListFilter
