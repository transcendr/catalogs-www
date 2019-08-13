import React from "react"
import { Query } from "react-apollo"
import Layout from "components/layout"
import SEO from "components/seo"
import Header from "components/header"
import HeaderMobile from "components/header/Mobile"
import TopPanel from "components/toppanel"
import Glider from "components/glider"
import SectionDivider from "components/divider"
// import Catalogs from "components/catalogslist"
import CatalogsWall from "components/catalogswall"
import MarketingBanner from "components/mbanner"
import Footer from "components/footer"
import Slider from "components/netflixslider"

import { GET_FILTERED_CATALOGS } from "apollo/queries"

import "../sass/global.scss"
import AllDepartmentsSlider from "components/netflixslider/AllDepartmentsSlider"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <HeaderMobile />
      <TopPanel />
      <SectionDivider />
      <AllDepartmentsSlider />
      <SectionDivider />
      <MarketingBanner />
      <Footer />
    </Layout>
  )
}

export default IndexPage
