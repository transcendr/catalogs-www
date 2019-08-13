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

// const movies = [
//   {
//     id: 1,
//     image:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     imageBg:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     title: "1983",
//   },
//   {
//     id: 2,
//     image:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     imageBg:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     title: "Russian doll",
//   },
//   {
//     id: 3,
//     image:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     imageBg:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     title: "The rain",
//   },
//   {
//     id: 4,
//     image:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     imageBg:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     title: "Sex education",
//   },
//   {
//     id: 5,
//     image:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     imageBg:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     title: "Elite",
//   },
//   {
//     id: 6,
//     image:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     imageBg:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     title: "Black mirror",
//   },
//   {
//     id: 7,
//     image:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     imageBg:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     title: "Black mirror",
//   },
//   {
//     id: 8,
//     image:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     imageBg:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     title: "Black mirror",
//   },
//   {
//     id: 9,
//     image:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     imageBg:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     title: "Black mirror",
//   },
//   {
//     id: 10,
//     image:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     imageBg:
//       "https://cdn.catalogs.com/flagship/img/covers/full/cov_CAL-equine12-18.jpg",
//     title: "Black mirror",
//   },
// ]

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <HeaderMobile />
      <TopPanel />
      {/* <Glider /> */}
      <SectionDivider />
      {/* <CatalogsWall /> */}
      <AllDepartmentsSlider />
      <MarketingBanner />
      <Footer />
    </Layout>
  )
}

export default IndexPage
