import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const HeroSection = () => {
  return (
    <main className='hero-section main'>
    <div className="container grid grid-two-cols">
      <div className="hero-content">
        <h1 className='heading-xl'>Explore The World , One Country at a Time.</h1>
        <p className='paragraph'>Discover the history , culture amd thee beauty of the nation. Sort ,Search and filter Through countries to find the details to you.</p>
        <button className='btn btn-darken btn-inline bg-white-box'>
          Start Exploring  <FaArrowRightLong />

        </button>
      </div>
      <div className="hero-image">
        <img src="imgs/world.png" alt="World Beauty" className='banner-image' />
      </div>
    </div>
  </main>
  )
}

export default HeroSection