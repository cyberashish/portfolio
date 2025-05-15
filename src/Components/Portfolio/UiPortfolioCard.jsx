import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'

const UiPortfolioCard = ({img,title,desc,order1,order2,color,projectlink}) => {
  return (
    <Link to={projectlink} target='_blank'>
    <div className="w-full flex lg:flex-row flex-col gap-6">
    <div className={` w-full order-${order1}`}>
      <div className="project relative rounded-lg overflow-hidden group cursor-pointer">
        <img src={img} alt="foodOne" className="w-100" />
        <div className="flex w-full flex-col absolute -bottom-20 gap-1 ps-6 w-100 project-grad transition-all group-hover:bottom-0 duration-300">
          <h3 className={`text-xl text-${color} font-semibold pt-6`}>
           {title}
          </h3>
          <p className="after:absolute after:w-10 after:start-0 after:top-1/2 after:-translate-y-1/2 after:h-[2px] after:bg-dark relative ps-12 font-medium text-dark mb-6 capitalize">
           {desc}
          </p>
        </div>
      </div>
      <h3 className="text-white text-2xl font-semibold mt-4">{title}</h3>
      <p className="text-sm text-white/80">{desc}</p>
    </div>
    </div>
    </Link>
  )
}

export default UiPortfolioCard
