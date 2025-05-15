import { Icon } from '@iconify/react'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-dark pt-[120px]'>
    <div className="container">
        <div className="grid grid-cols-12 gap-6 pb-[75px] border-b-2 border-darkgray">
            <div className="lg:col-span-4 col-span-12">
             <div className="flex md:flex-nowrap flex-wrap gap-9 items-center">
             <div className="p-4 rounded-full bg-primary">
             <Icon icon='fluent:location-ripple-20-filled' className='lg:text-7xl text-6xl' />
             </div>
             <div className="flex flex-col gap-4">
               <h3 className='text-2xl font-medium text-white'>Address</h3>
               <p className='text-base text-body'>150 Feet Ring Rd, Near Balaji Hall, Aditya Park, Mavdi, Rajkot, Gujarat 360004</p>
             </div>
             </div>
            </div>
            <div className="lg:col-span-4 col-span-12">
             <div className="flex flex-wrap gap-9 items-center">
             <div className="p-4 rounded-full bg-primary">
             <Icon icon='mingcute:phone-call-fill' className='lg:text-7xl text-6xl' />
             </div>
             <div className="flex flex-col gap-4">
               <h3 className='text-2xl font-medium text-white'>Let's talk us</h3>
                 <div className="flex flex-col gap-2">
                 <p className='text-base text-body'>Phone : +91 7004500637</p>
               <p className='text-base text-body'>Whatsapp : +91 7004500637</p>
                 </div>
             </div>
             </div>
            </div>
            <div className="lg:col-span-4 col-span-12">
             <div className="flex flex-wrap gap-9 items-center">
             <div className="p-4 rounded-full bg-primary">
             <Icon icon='ic:baseline-email' className='lg:text-7xl text-6xl' />
             </div>
             <div className="flex flex-col gap-4">
               <h3 className='text-2xl font-medium text-white'>Send us email</h3>
               <div className="flex flex-col gap-2">
               <p className='text-base text-body'>cyberashish321@gmail.com</p>
               <p className='text-base text-body'>cybermadhav0@gmail.com</p>
               </div>
             </div>
             </div>
            </div>
        </div>
        <div className="flex flex-wrap justify-between py-9">
            <p className='text-base font-medium text-body'>© EWS 2024 | All Rights Reserved</p>
            <div className="flex flex-wrap gap-6">
                <span className='text-base font-medium text-body hover:text-primary cursor-pointer'>Terms & Condition</span>
                <span className='text-base font-medium text-body hover:text-primary cursor-pointer'>Privacy Policy</span>
                <span className='text-base font-medium text-body hover:text-primary cursor-pointer'>Sitemap</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
