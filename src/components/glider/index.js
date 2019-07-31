import React, { useState } from "react"
import ReactCoverCarousel from "react-cover-carousel"
import { StyleRoot } from "radium"
import { client } from "apollo/client"
import { GLIDER_COVERS } from "apollo/queries"

import "styles/components/Glider.scss"

const buildGliderImages = () => {
  let covers = []
  try {
    const { gliderCovers } = client.readQuery({
      query: GLIDER_COVERS,
    })
    covers = gliderCovers.map((x, index) => {
      return (
        <img
          key={index}
          src={x}
          data-action={() => {
            alert("clicked")
          }}
        />
      )
    })
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
        setImages(found)
        clearInterval(itv)
      }
    }, 1000)
  }

  if (images.length === 0) {
    pollImages()
  }

  return (
    <div className="glider">
      {images.length > 0 ? (
        <StyleRoot>
          <ReactCoverCarousel
            styles={{ background: "#fff" }}
            mediaQueries={{
              backgroundColor: "white",
              width: "100vw",
              maxWidth: "1400px",

              "@media (max-width: 991px)": {
                height: "400px",
              },
              "@media (max-width: 600px)": {
                height: "250px",
              },
              "@media (min-width: 900px)": {
                height: "450px",
                marginTop: "0px",
              },
            }}
            height={500}
            displayQuantityOfSide={3}
            navigation={true}
            enableHeading={false}
            enableScroll={false}
            activeImageIndex={Math.floor(images.length / 2)}
            activeImageStyle={{
              margin: "5px",
              border: "2px solid rgba(0, 0, 0, .7)",
              borderRadius: "4px",
            }}
            activeFigureScale={1.2}
            otherFigureScale={1}
            otherFigureRotation={60}
            infiniteScroll={true}
            transitionSpeed={700}
            maxPixelWidthForMobileMediaQuery={100}
            zoomable={false}
          >
            {images}
          </ReactCoverCarousel>
        </StyleRoot>
      ) : null}
    </div>
  )
}

export default Glider
