import React from 'react'
import Carousel from './Carousel'
import Navbar from './Navbar'
import Topbar from './Topbar'

function PageNotFound() {
  document.title="Page Not Found"
  return (
    <>
    <Topbar/>
    <Navbar/>
    <Carousel/>
    </>
  )
}

export default PageNotFound