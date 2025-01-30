import React from 'react'
import { NavLink } from 'react-router-dom'
import CartMenu from './CartMenu'

function Menu() {
  return (
    <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              <a href="" className="text-decoration-none d-block d-lg-none">
                <span className="h1 text-uppercase text-dark bg-light px-2">
                  CETPA
                </span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                  Shop
                </span>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <NavLink to="/" className="nav-item nav-link active">
                    Home
                  </NavLink>
                  <NavLink to="/Products" className="nav-item nav-link">
                    Products
                  </NavLink>
                  <NavLink to="/Products/ProductDetails"  className="nav-item nav-link">
                    Product Details
                  </NavLink>
                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Pages <i className="fa fa-angle-down mt-1" />
                    </a>
                    <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                      <NavLink to="/Cart" className="dropdown-item">
                        Shopping Cart
                      </NavLink>
                      <NavLink to="/Checkout" className="dropdown-item">
                        Checkout
                      </NavLink>
                    </div>
                  </div>
                  <NavLink to="/ContactUs" href="contact.html" className="nav-item nav-link">
                    Contact
                  </NavLink>
                </div>
                <CartMenu/>
              </div>
            </nav>
          </div>
  )
}

export default Menu