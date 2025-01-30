import React from 'react'
import Carousel from './Carousel'
import Navbar from './Navbar'
import Topbar from './Topbar'

function SignIn() {
  document.title="Sign-In"
  return (
    <>
    <Topbar/>
    <Navbar/>
    <Carousel/>
    </>
  )
}
export default SignIn