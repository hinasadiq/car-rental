import React from 'react'
import Hero from '../Components/Hero'
import FeauteredSection from '../Components/FeauteredSection'
import Banner from '../Components/Banner'
import Testimonial from '../Components/Testimonial'
import NewsLetter from '../Components/NewsLetter'
import Foter from '../Components/Foter'

const Home = () => {
  return (
    <>
        <Hero />
        <FeauteredSection />
        <Banner />
        <Testimonial />
        <NewsLetter />
        <Foter />
    </>
  )
}

export default Home