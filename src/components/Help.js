import React from 'react'
import Carousel from './Carousel'
import Navbar from './Navbar'
import Topbar from './Topbar'

function Help() {
  document.title="Help"
  return (
    <>
    <Topbar/>
    <Navbar/>
    <Carousel/>
    </>
  )
}
export default Help