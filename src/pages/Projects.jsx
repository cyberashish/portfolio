import React from 'react'
import Portfolio from '../Components/Portfolio/Portfolio'
import Breadcrumb from '../Components/Breadcrumb'

const Projects = () => {
  return (
    <div className='bg-dark'>
    <Breadcrumb pagetitle='Projects' />
      <Portfolio/>
    </div>
  )
}

export default Projects
