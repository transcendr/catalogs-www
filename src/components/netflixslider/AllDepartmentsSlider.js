import React from "react"
import { Query } from "react-apollo"
import { GET_FILTERED_CATALOGS } from "apollo/queries"
import Slider from "components/netflixslider"
import { departmentNameByNameUrl } from "../../utils/departments"

import "./AllDepartmentsSlider.scss"

const DepartmentSlider = ({ department }) => {
  const RenderNothing = () => <div></div>
  return (
    <Query query={GET_FILTERED_CATALOGS} notifyOnNetworkStatusChange>
      {({ loading, error, data, refetch, networkStatus, client }) => {
        // Refetching
        if (networkStatus === 4) return <p>Loading...</p>

        // Loading
        if (loading) return <RenderNothing />

        // Loaded
        const { filteredCatalogs } = data

        // If no catalogs, do not display slider component
        if (filteredCatalogs.length === 0) return <RenderNothing />

        // Map catalogs to slider component format
        const catalogs = []

        filteredCatalogs.forEach((x, index) => {
          if (
            x.departmentByPrimaryDepartment &&
            x.departmentByPrimaryDepartment.nameUrl === department
          ) {
            const img = `https://cdn.catalogs.com/flagship/img/covers/full/${x.coverUrl}`
            catalogs.push({
              id: index,
              image: img,
              imageBg: img,
              title: x.catalogTitle,
            })
          }
        })

        if (catalogs.length === 0) return <RenderNothing />

        // Load slider with catalogs
        return (
          <>
            <h2 class="row-header">
              <div className="row-header-title">
                {departmentNameByNameUrl[department]}
              </div>
            </h2>
            <Slider>
              {catalogs.map(catalog => (
                <Slider.Item movie={catalog} key={catalog.id}>
                  item1
                </Slider.Item>
              ))}
            </Slider>
          </>
        )
      }}
    </Query>
  )
}

const AllDepartmentsSlider = () => {
  const categories = Object.keys(departmentNameByNameUrl)

  return categories.map(dept => <DepartmentSlider department={dept} />)
}

export default AllDepartmentsSlider
