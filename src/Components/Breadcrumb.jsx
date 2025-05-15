import { Icon } from '@iconify/react'
import React from 'react'

const Breadcrumb = ({pagetitle}) => {
  return (
    <div className="contact-wrapper relative">
    <div className="text-wrapper absolute top-1/2 w-full start-0">
      <div className="container">
        <div className="flex justify-between flex-wrap w-full">
          <h3 className="text-5xl font-black text-white ">{pagetitle}</h3>
          <div className="flex gap-2 items-center">
            <span className="text-lg font-semibold text-white">Home</span>
            <Icon icon="ri:focus-line" className="text-primary text-lg" />
            <span className="text-lg font-semibold text-white">{pagetitle}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Breadcrumb
