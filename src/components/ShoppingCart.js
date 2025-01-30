import React from 'react'
import Breadcrumb from './Breadcrumb'
import Cart from './Cart'
import Footer from './Footer'
import Navbar from './Navbar'
import Topbar from './Topbar'

function ShoppingCart() {
  document.title="Shopping Cart"
  return (
    <>
    <Topbar />
    <Navbar/>
    <Breadcrumb/>
    <Cart/>
    <Footer/>
    </>
  )
}

export default ShoppingCart