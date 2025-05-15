"use client"

import { Icon } from '@iconify/react'
import React from 'react'


const CustomerReviewCard = ({img,customer,desig,desc}) => {
  return (
    <div className="wrapper relative bg-dark w-full p-[30px] border-semigray  border-2 mt-12">
    <div className="flex mb-[18px]">
      <button
        type="button"
        className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500"
      >
        <Icon icon="ri:star-fill" />
      </button>
      <button
        type="button"
        className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500"
      >
        <Icon icon="ri:star-fill" />
      </button>
      <button
        type="button"
        className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500"
      >
        <Icon icon="ri:star-fill" />
      </button>
      <button
        type="button"
        className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500"
      >
        <Icon icon="ri:star-fill" />
      </button>
      <button
        type="button"
        className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-gray-300 hover:text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-600 dark:hover:text-yellow-500"
      >
        <Icon icon="ri:star-fill" />
      </button>
    </div>
    <div className="flex text-start flex-col gap-2">
      <h3 className="font-medium text-[22px] text-white">{customer}</h3>
      <h5 className="uppercase text-sm text-body tracking-wider leading-tight">{desig}</h5>
    </div>
    <div className="grid grid-cols-12 gap-6">
    <p className="md:text-base text-sm mt-5 tracking-wide text-body text-start md:col-span-10 col-span-10">{desc}</p>
    <div className="md:col-span-2  col-span-2 flex justify-end">
    <Icon icon='bxs:quote-alt-right' className="text-6xl inline top-0 end-0 text-primary" />
    </div>
    </div>
    <img src={img} alt="customer-image" className="absolute top-0 -translate-y-1/2 end-10 w-24 h-24 rounded-full" />
  </div>
  )
}

export default CustomerReviewCard
