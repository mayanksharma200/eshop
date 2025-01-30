import React from 'react'
import Carousel from './Carousel'
import Navbar from './Navbar'
import Topbar from './Topbar'

function ProductDetails() {
  document.title="Product Details"
  return (
    <>
    <Topbar/>
    <Navbar/>
    <Carousel/>
    </>
  )
}
export default ProductDetails
