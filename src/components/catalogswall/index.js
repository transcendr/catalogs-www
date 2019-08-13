import React, { useState } from "react"
import { Query } from "react-apollo"
import { GET_FILTERED_CATALOGS } from "apollo/queries"
import Masonry from "react-masonry-component"
import { Element } from "react-scroll"
import "styles/components/CatalogsWall.scss"

/**
 * A Masonry based catalog layout for the home
 * page.
 */

const masonryOptions = {
  transitionDuration: 0,
}

const CatalogItem = ({ catalog }) => {
  const { catalogTitle, coverUrl } = catalog
  const cover = `https://cdn.catalogs.com/flagship/img/covers/full/${coverUrl}`
  return (
    <div className="cwall__catalog">
      <img src={cover} alt={catalogTitle} />
      {/* <div className="cwall__catalog_details">
        <div className="cwall__catalog_title">{catalogTitle}</div>
      </div> */}
    </div>
  )
}

const CatalogElements = ({ catalogs }) => {
  return (
    <>
      {catalogs.map((x, index) => {
        return <CatalogItem key={index} catalog={x} />
      })}
    </>
  )
}

const CatalogsWall = () => {
  const [catalogs, setCatalogs] = useState([])

  const _setCatalogs = data => {
    if (!data || !data.filteredCatalogs) return []
    const { filteredCatalogs } = data
    setCatalogs(filteredCatalogs)
    return filteredCatalogs
  }

  return (
    <>
      <Element name="scrollToSearch" />
      <Query query={GET_FILTERED_CATALOGS} notifyOnNetworkStatusChange>
        {({ loading, error, data, refetch, networkStatus, _client }) => {
          return (
            <div className="catalogs_wall">
              <Masonry
                className={"catalogs_wall__scrollable"} // default ''
                // style={{ width: `${catalogs.length * 7}%` }}
                elementType={"div"} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={{}} // default {}
              >
                <CatalogElements catalogs={_setCatalogs(data)} />
              </Masonry>
            </div>
          )
        }}
      </Query>
    </>
  )
}

export default CatalogsWall
