import React from 'react'
import Carousel from './Carousel'
import FeaturedProducts from './FeaturedProducts'
import Footer from './Footer'
import Navbar from './Navbar'
import ProductFilter from './ProductFilter'
import Topbar from './Topbar'

function ProductsShop() {
  document.title="Product"
  return (
    <>
    <Topbar/>
    <Navbar/>
    {/* <Carousel/> */}
    
    <div class="container-fluid">
        <div class="row px-xl-5">
        <div class="col-lg-3 col-md-4">
        <ProductFilter/>
        <ProductFilter/>
        <ProductFilter/>
        <ProductFilter/>
        </div>
        
        <div class="col-lg-9 col-md-8">
                <div class="row pb-3">
                    <div class="col-12 pb-1">
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <div>
                                <button class="btn btn-sm btn-light"><i class="fa fa-th-large"></i></button>
                                <button class="btn btn-sm btn-light ml-2"><i class="fa fa-bars"></i></button>
                            </div>
                            <div class="ml-2">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">Latest</a>
                                        <a class="dropdown-item" href="#">Popularity</a>
                                        <a class="dropdown-item" href="#">Best Rating</a>
                                    </div>
                                </div>
                                <div class="btn-group ml-2">
                                    <button type="button" class="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">10</a>
                                        <a class="dropdown-item" href="#">20</a>
                                        <a class="dropdown-item" href="#">30</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        <FeaturedProducts/>
        <div className="col-12">
  <nav>
    <ul className="pagination justify-content-center">
      <li className="page-item disabled">
        <a className="page-link" href="#">
          Previous
        </a>
      </li>
      <li className="page-item active">
        <a className="page-link" href="#">
          1
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          2
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          3
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          Next
        </a>
      </li>
    </ul>
  </nav>
</div>

        </div>
        
        </div>
        </div>
    </div>
    
   <Footer/>

    </>
  )
}
export default ProductsShop