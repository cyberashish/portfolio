"use client"

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { REVIEW } from "../../constants/review";
import CustomerReviewCard from "./CustomerReviewCard";

const CustomerReview = () => {
    
  return (
    <>
      <div className="service-section lg:py-[130px] py-20 bg-darkgray">
        <div className="container ">
          <div className="flex justify-center">
            <div className="lg:w-7/12 w-full text-center">
              <span className="uppercase tracking-wider text-primary text-xl font-semibold text-center mb-6 block">
               Customer Reviews
              </span>
              <p className="lg:text-5xl text-4xl font-black text-white ">My testomonial</p>
            </div>
          </div>
          <div className="wrapper">
            <Swiper slidesPerView={2}  breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          992:{
            slidesPerView: 2,
            spaceBetween: 50,
          }
        }} spaceBetween={30} className="mySwiper mt-12" >
             {REVIEW.map((item)=>{
              return (
                <SwiperSlide key={item.key}>
              <CustomerReviewCard  customer={item.customer} img={item.img} desig={item.desig} desc={item.desc} />
              </SwiperSlide>
              )
             })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
