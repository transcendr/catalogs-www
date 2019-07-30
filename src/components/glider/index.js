import React, { useState } from "react"
import ReactCoverCarousel from "react-cover-carousel"
import { client } from "apollo/client"
import { GLIDER_COVERS } from "apollo/queries"

import "styles/components/Glider.scss"

const buildGliderImages = () => {
  let covers = []
  try {
    const { gliderCovers } = client.readQuery({
      query: GLIDER_COVERS,
    })
    console.log("!!!", gliderCovers)
    covers = gliderCovers.map((x, index) => {
      return <img key={index} src={x} />
    })
    console.log("@@@", covers)
  } catch (e) {
    covers = [
      "https://via.placeholder.com/220x295.png?text=Catalogs.com+Cover",
      "https://via.placeholder.com/220x295.png?text=Catalogs.com+Cover",
      "https://via.placeholder.com/220x295.png?text=Catalogs.com+Cover",
    ]
  }
  return covers
}

const Glider = () => {
  const [images, setImages] = useState([])

  const pollImages = () => {
    const itv = setInterval(() => {
      const found = buildGliderImages()
      if (found.length > 0) {
        console.log("found images", found)
        setImages(found)
        clearInterval(itv)
      }
    }, 1000)
  }

  if (images.length === 0) {
    pollImages()
  }

  let allOfYourImages = images
  console.log("ALL OF IMAGES", allOfYourImages)
  allOfYourImages = [
    <img
      key="1"
      src="https://via.placeholder.com/220x295.png?text=Catalogs.com+Cover"
    />,
    <img
      key="2"
      src="https://via.placeholder.com/220x295.png?text=Catalogs.com+Cover"
    />,
    <img
      key="3"
      src="https://via.placeholder.com/220x295.png?text=Catalogs.com+Cover"
    />,
    <img
      key="4"
      src="https://via.placeholder.com/220x295.png?text=Catalogs.com+Cover"
    />,
    <img
      key="5"
      src="https://via.placeholder.com/220x295.png?text=Catalogs.com+Cover"
    />,
    <img
      key="6"
      src="https://via.placeholder.com/220x295.png?text=Catalogs.com+Cover"
    />,
    <img
      key="7"
      src="https://via.placeholder.com/220x295.png?text=Catalogs.com+Cover"
    />,
    <img
      key="8"
      src="https://via.placeholder.com/220x295.png?text=Catalogs.com+Cover"
    />,
    <img
      key="9"
      src="https://via.placeholder.com/220x295.png?text=Catalogs.com+Cover"
    />,
    <img
      key="10"
      src="https://via.placeholder.com/220x295.png?text=Catalogs.com+Cover"
    />,
  ]
  return (
    <div className="glider">
      {typeof window !== "undefined" && images.length > 0 ? (
        <ReactCoverCarousel
          styles={{ background: "#fff" }}
          mediaQueries={{
            backgroundColor: "white",
            width: "100vw",
            "@media (max-width: 900px)": {
              height: "600px",
            },
            "@media (min-width: 900px)": {
              height: "800px",
            },
          }}
          height={500}
          displayQuantityOfSide={3}
          navigation={true}
          enableHeading={false}
          enableScroll={false}
          activeImageIndex={Math.floor(images.length / 2)}
          activeImageStyle={{
            margin: "2em",
            border: "2px solid rgba(0, 0, 0, .7)",
            borderRadius: "4px",
          }}
          activeFigureScale={1.2}
          otherFigureScale={0.8}
          otherFigureRotation={70}
          mediaQueries={{}}
          infiniteScroll={true}
          transitionSpeed={700}
          maxPixelWidthForMobileMediaQuery={480}
          zoomable={false}
        >
          {images}
        </ReactCoverCarousel>
      ) : null}
    </div>
  )
}

export default Glider
