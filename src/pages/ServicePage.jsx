import React from 'react'
import Services from '../Components/Services/Services'
import Breadcrumb from '../Components/Breadcrumb'

const ServicePage = () => {
  return (
    <div>
      <Breadcrumb pagetitle='Services' />
        <Services/>
    </div>
  )
}

export default ServicePage
