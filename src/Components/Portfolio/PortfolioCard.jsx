import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'

const techIcons = [
  {
  tech:"ReactJs",
  icon:"devicon:react"
},
  {
  tech:"TailwindCss",
  icon:"devicon:tailwindcss"
},
  {
  tech:"ShadcnUi",
  icon:"simple-icons:shadcnui"
},
  {
  tech:"Express",
  icon:"lineicons:expressjs"
},
  {
  tech:"MongoDB",
  icon:"devicon:mongodb"
},
  {
  tech:"NextJs",
  icon:"teenyicons:nextjs-outline"
},
]

const PortfolioCard = ({img,title,desc,infodesc1,infodesc2,infodesc3,infodesc4,order1,order2,color,projectlink , technologyUsed}) => {
  console.log(technologyUsed);
  return (
    <Link to={projectlink} target='_blank'>
    <div className="w-full flex lg:flex-row flex-col gap-6">
    <div className={`lg:w-8/12 w-full order-${order1}`}>
      <div className="project relative rounded-t-lg overflow-hidden group cursor-pointer">
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
    </div>
    <div className={`lg:w-4/12 w-full flex items-center order-${order2}`}>
      <div className='flex flex-col items-start'>
      <h3 className="text-white text-3xl font-semibold">{title}</h3>

        <ul className='flex flex-col gap-5 text-gray-300 font-medium text-base mt-8'>
          <li className="flex flex-col gap-1" >
           <h3 className="text-base font-semibold">Technologies Used</h3>
           <div className="flex items-center gap-6 mt-3 flex-wrap">
             {
              // eslint-disable-next-line react/prop-types
              technologyUsed.map((item,index) => {
                let data = techIcons.find((techInfo) => techInfo.tech ===  item);
                return (
                  <div key={index} className="hs-tooltip [--placement:top] inline-block">
      <button type="button" >
      <Icon  icon={data.icon} width={24} height={24} className='text-white' />
        <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-primary text-xs font-medium text-white rounded-md shadow-2xs dark:bg-neutral-700" role="tooltip">
          {data.tech}
        </span>
      </button>
    </div>
                )
                
                
              })
             }
           </div>
          </li>
          <li className='flex gap-1'>
          <Icon icon='mingcute:arrow-right-fill' className='text-2xl' /> {infodesc1}
          </li>
          <li className='flex gap-1'>
          <Icon icon='mingcute:arrow-right-fill' className='text-2xl' /> {infodesc2}
          </li>
          <li className='flex gap-1'>
          <Icon icon='mingcute:arrow-right-fill' className='text-2xl' /> {infodesc3}
          </li>
          <li className='flex gap-1'>
          <Icon icon='mingcute:arrow-right-fill' className='text-2xl' /> {infodesc4}
          </li>
        </ul>
      </div>

    </div>
    </div>
    </Link>
  )
}

export default PortfolioCard
