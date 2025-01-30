import React from 'react'
import Carousel from './Carousel'
import Navbar from './Navbar'
import Topbar from './Topbar'

function AboutUs() {
  document.title="About Us"
  return (
    <>
    <Topbar/>
    <Navbar/>
    <Carousel/>
    </>
  )
}

export default AboutUs