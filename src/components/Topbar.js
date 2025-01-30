import React from 'react'
import CompanyBrand from './CompanyBrand'
import ContactNo from './ContactNo'
import MenuTop from './MenuTop'
import SearchBar from './SearchBar'

function Topbar() {
  return (
    <div className="container-fluid">        
          <MenuTop/>        
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <CompanyBrand/>
          <SearchBar/>
          <ContactNo/>
        </div>
      </div>
  )
}

export default Topbar