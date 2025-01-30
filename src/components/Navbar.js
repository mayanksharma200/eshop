import React from 'react'
import Categories from './Categories'
import Menu from './Menu'

function Navbar() {
  return (
    <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">         
            <Categories/>          
            <Menu/>
        </div>
      </div>
  )
}

export default Navbar