import React from "react"
import { scroller } from "react-scroll"
import "styles/components/TopPanel.scss"

const TopPanel = () => {
  const scrollToSearch = () => {
    scroller.scrollTo("scrollToSearch", {
      duration: 250,
      delay: 0,
      smooth: true,
      offset: -100, // Scrolls to element + 50 pixels down the page
    })
  }
  return (
    <div className="top_panel">
      <div className="top_panel__column top_panel__left">
        <div className="tp_headline_container">
          <img
            src="https://uploads-ssl.webflow.com/5d139c24cb2826b69b8a6cc5/5d1f2fe3e3f0a7f324bab029_tp-headline-image.png"
            alt="Browse"
          />
        </div>
      </div>
      <div className="top_panel__column top_panel__middle">
        <div className="tp_cta_btn" onClick={() => scrollToSearch()}>
          <div>Start Browsing Now</div>
        </div>
      </div>
      <div className="top_panel__column top_panel__right">
        <div className="tp_brands_container">
          <img
            src="https://uploads-ssl.webflow.com/5d139c24cb2826b69b8a6cc5/5d1f300f62a00020debb1a67_brands.png"
            alt="Brands"
            className="tp_brand_image"
          />
          <div className="tp_testimonials">
            <div>
              "Thanks! JUST found you (searched Google.com) and saved $30 inside
              of 10 minutes. WOW. I will certainly pass your URL on to
              friends..."
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopPanel
