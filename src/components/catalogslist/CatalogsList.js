import React from "react"

import "styles/components/CatalogsList.scss"

const CatalogItem = ({ name }) => {
  return (
    <div className="clist__catalog">
      <div className="clist__catalog_image" />
      <div className="clist__catalog_actions">
        <img
          src="https://uploads-ssl.webflow.com/5d139c24cb2826b69b8a6cc5/5d1fcf73420c541691346df0_favorite-catalog-icon.svg"
          alt="Add to Favorite"
          className="clist__catalog_favorite"
        />
        <div class="clist__catalog_title">{name}</div>
        <div className="clist__catalog_details">
          <div className="clist__catalog_details_price">FREE</div>
          <a href="#list" className="clist__catalog_details_btn">
            Order
          </a>
        </div>
      </div>
    </div>
  )
}

const catalogs = [
  { name: `Macy's Department Store` },
  { name: `Macy's Department Store` },
  { name: `Macy's Department Store` },
  { name: `Macy's Department Store` },
  { name: `Macy's Department Store` },
  { name: `Macy's Department Store` },
  { name: `Macy's Department Store` },
  { name: `Macy's Department Store` },
  { name: `Macy's Department Store` },
  { name: `Macy's Department Store` },
  { name: `Macy's Department Store` },
  { name: `Macy's Department Store` },
  { name: `Macy's Department Store` },
  { name: `Macy's Department Store` },
  { name: `Macy's Department Store` },
]

const CatalogsList = () => (
  <>
    {catalogs.map((x, index) => {
      return <CatalogItem key={index} name={x.name} />
    })}
  </>
)

export default CatalogsList
