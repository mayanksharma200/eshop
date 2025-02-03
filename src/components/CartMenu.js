import React from 'react'
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function CartMenu(props) {
  const cartCount = props.cartItems.length;
  console.log(cartCount, 'kkkkkk')
  return (
    <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
      <a href="" className="btn px-0">
        <i className="fas fa-heart text-primary" />
        <span
          className="badge text-secondary border border-secondary rounded-circle"
          style={{ paddingBottom: 2 }}
        >
          0
        </span>
      </a>
      <NavLink to="/Cart">
        <a href="" className="btn px-0 ml-3">
          <i className="fas fa-shopping-cart text-primary" />
          <span
            className="badge text-secondary border border-secondary rounded-circle"
            style={{ paddingBottom: 2 }}
          >
            {cartCount}
          </span>
        </a>
      </NavLink>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
  };
};

export default connect(mapStateToProps)(CartMenu);