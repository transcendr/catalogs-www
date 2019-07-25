import React from "react"
import Layout from "components/layout"
import SEO from "components/seo"
import Header from "components/header"
import HeaderMobile from "components/header/Mobile"
import TopPanel from "components/toppanel"
import Glider from "components/glider"
import SectionDivider from "components/divider"
import Catalogs from "components/catalogslist"
import MarketingBanner from "components/mbanner"
import Footer from "components/footer"

import "../sass/global.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <HeaderMobile />
      <TopPanel />
      <Glider />
      <SectionDivider />
      <Catalogs />
      <MarketingBanner />
      <Footer />
    </Layout>
  )
}

export default IndexPage
