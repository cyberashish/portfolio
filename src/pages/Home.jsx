import React from 'react'
import Banner from '../Components/Banner'
import Services from '../Components/Services/Services'
import Portfolio from '../Components/Portfolio/Portfolio'
import About from '../Components/About/About'
import CustomerReview from '../Components/Review/CustomerReview'

const Home = () => {
  return (
    <>
      <Banner/>
      <Services/>
      <Portfolio/>
      <About/>
      <CustomerReview/>
    </>
  )
}

export default Home
