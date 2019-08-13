import React from "react"

import "styles/components/CatalogsList.scss"

const CatalogItem = ({ catalog }) => {
  const { catalogTitle, coverUrl } = catalog
  return (
    <div className="clist__catalog">
      <div
        className="clist__catalog_image"
        alt={catalogTitle}
        style={{
          backgroundImage: `url(https://cdn.catalogs.com/flagship/img/covers/full/${coverUrl})`,
        }}
      />
      <div className="clist__catalog_actions">
        <img
          src="https://uploads-ssl.webflow.com/5d139c24cb2826b69b8a6cc5/5d1fcf73420c541691346df0_favorite-catalog-icon.svg"
          alt="Add to Favorite"
          className="clist__catalog_favorite"
        />
        <div className="clist__catalog_title">{catalogTitle}</div>
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

const CatalogsList = ({ catalogs }) => (
  <>
    {catalogs.map((x, index) => {
      return <CatalogItem key={index} catalog={x} />
    })}
  </>
)

export default CatalogsList
