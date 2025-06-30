import React from 'react'
import bannerimg from "../assets/Banner/banner.jpg"
import { Icon } from '@iconify/react'
import profile from "../assets/Banner/profile.png"
import completeProfile from "../assets/Banner/complete_profile.png"
const Banner = () => {
  return (
    <>
      <div className="hero-section" style={{backgroundImage:`url(${bannerimg})`}}>
        <div className="wrapper lg:top-1/2 lg:absolute lg:-translate-y-1/2 w-full">
        <div className="container">
            <div className="grid grid-cols-12 gap-6 items-center">
               <div className="lg:col-span-6 col-span-12 lg:mt-0 mt-24">
                  <h1 className='lg:text-6xl text-5xl font-bold text-white'>HI, I'M ASHISH! SKILLED <span className='text-primary'>DEVELOPER</span></h1>
                  <p className='text-base font-medium text-body leading-relaxed mb-[65px] mt-8'>I'm a full-stack MERN developer dedicated to crafting seamless digital experiences. With expertise in both front-end and back-end development, I transform complex concepts into intuitive, engaging user interfaces, blending functionality with aesthetics to captivate users at every interaction.</p>
                  <div className="flex gap-[30px] flex-wrap items-center">
                    <a href='Resume.pdf' download="Resume.pdf" className='btn text-base flex items-center gap-2'>Download Cv <Icon icon='heroicons-solid:download' className='text-lg'  /> </a>
                    <a href="https://www.google.com/" target='_blank'>
                    {/* <div className="flex gap-2 items-center cursor-pointer group">
                      <div className="w-12 h-12  rounded-full bg-primary flex items-center justify-center group-hover:bg-dark transition-all duration-200">
                         <Icon icon='solar:play-bold' className='text-2xl text-dark group-hover:text-primary transition-all duration-200' />
                      </div>
                      <p className='text-base text-white'>Watch The Video</p>
                    </div> */}
                    </a>
                  </div>
               </div>
               <div className="lg:col-span-6 col-span-12 flex justify-end align-items-center">
                 <img src={completeProfile} alt="" className='w-100 relative top-8 lg:mb-0 mb-10' />
               </div>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Banner
