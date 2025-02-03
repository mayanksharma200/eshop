import React from "react";
import { connect } from "react-redux";
import { updateCart } from "../reduxEx/myReducer";
import { useState } from "react";


function SingleProduct(props) {
  console.log(props);
  const [cart, setcart] = useState([])
  const product = props.product;
  function onClick(data){
    // console.log('check', data);
    props.update(data);
  }
  return (
    <>
      {product
        ? product.map((value, index) => (
            <div className="col-lg-4 col-md-4 col-sm-6 pb-1" key={index}>
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src={value.thumbnail}
                    alt=""
                  />
                  <div className="product-action">
                    <a
                      className="btn btn-outline-dark btn-square"
                      onClick={() => onClick(value)}
                    >
                      <i className="fa fa-shopping-cart" />
                    </a>
                    <a className="btn btn-outline-dark btn-square" href="">
                      <i className="far fa-heart" />
                    </a>
                    <a className="btn btn-outline-dark btn-square" href="">
                      <i className="fa fa-sync-alt" />
                    </a>
                    <a className="btn btn-outline-dark btn-square" href="">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href="">
                    {value.title}
                  </a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>
                      $
                      {parseInt(
                        value.price -
                          value.price * (value.discountPercentage / 100)
                      )}
                    </h5>
                    <h6 className="text-muted ml-2">
                      <del>${value.price}</del>
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (data) => dispatch(updateCart(data)), // Dispatch product to Redux store
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
