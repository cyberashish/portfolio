import React from 'react'
import foodOne from "../../assets/portfolio/foodOne.png"
import { PORTFOLIO } from '../../constants/portfolio'
import PortfolioCard from './PortfolioCard'
import { Icon } from '@iconify/react'
import UiPortfolioCard from './UiPortfolioCard'

const Portfolio = () => {
  return (
    <>
      <div className="bg-darkgray lg:py-[130px] py-20">
        <div className="container">
          <div className="lg:w-7/12 w-full">
            <div className="flex flex-col justify-start mb-6 gap-4">
              <span className="uppercase tracking-wider text-primary text-xl font-medium">
                My recent portfolio
              </span>
              <p className="md:text-5xl text-4xl font-black text-white leading-[55px]">
                Elevate your brand to new heights with our portfolio expertise
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 my-10 mt-14">
          <Icon icon="icon-park-outline:more-app" width={28} height={28} className='text-primary' />
          <h1 className='text-white font-semibold text-3xl ' >MERN APP</h1>
          </div>
          <div className="flex flex-col gap-16 ">
          {PORTFOLIO.map((item)=>{
                 if(item.isMernApp){
                  return (
                    <PortfolioCard key={item.key} img={item.img} title={item.title} projectlink={item.href} desc={item.desc} infodesc1={item.infodesc1} infodesc2={item.infodesc2} infodesc3={item.infodesc3} infodesc4={item.infodesc4} order1={item.order1} order2={item.order2} color={item.color} technologyUsed={item.technologyUsed} />
                 )
                 }else{
                   return null
                 }
              })}
          </div>
          <div className="flex items-center gap-2 my-10 mt-20">
          <Icon icon="hugeicons:web-design-01" width={32} height={32} className='text-primary' />
          <h1 className='text-white font-semibold text-3xl ' >NextJs Web Dashboard</h1>
          </div>
          <div className="grid grid-cols-12 gap-6">
          {PORTFOLIO.map((item)=>{
                 if(item.type === "dashboard ui"){
                  return (
                    <div key={item.key} className="lg:col-span-6 col-span-12">
                      <UiPortfolioCard  img={item.img} title={item.title} projectlink={item.href} desc={item.desc} isMernApp={item.isMernApp} />
                      </div>
                   )
                 }else{
                  return null
                 }
              })}
             

          </div>
           <div className="flex items-center gap-2 my-10 mt-20">
          <Icon icon="hugeicons:web-design-01" width={32} height={32} className='text-primary' />
          <h1 className='text-white font-semibold text-3xl ' >Frontend React UI Design</h1>
          </div>
          <div className="grid grid-cols-12 gap-6">
          {PORTFOLIO.map((item)=>{
                 if(!item.isMernApp){
                  return (
                    <div key={item.key} className="lg:col-span-6 col-span-12">
                      <UiPortfolioCard  img={item.img} title={item.title} projectlink={item.href} desc={item.desc} isMernApp={item.isMernApp} />
                      </div>
                   )
                 }else{
                  return null
                 }
              })}
             

          </div>

        </div>
      </div>
    </>
  );
}

export default Portfolio
