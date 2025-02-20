// working match case pop unique objects in array with duplicacy increments

import React from "react";
import { connect } from "react-redux";
import { updateCart } from "../reduxEx/myReducer";

function SingleProduct(props) {
  let cart = JSON.parse(JSON.stringify(props.cartItems));
  let FinalProducts = {};
  if (cart.length !== 0) {
    for (let i = 0; i < cart.length; i++) {
      let id = cart[i].id;

      if (FinalProducts[id]) {
        FinalProducts[id].duplicate += 1;
      } else {
        FinalProducts[id] = { ...cart[i], duplicate: 1 };
      }
    }
  }

  // Convert object to array
  FinalProducts = Object.values(FinalProducts);

  console.log(FinalProducts);

  // console.log(IDs, 'iddd');
  console.log(props);
  console.log(FinalProducts, "finallproduct");

  function onClick(data) {
    console.log("check", data);
    props.update(data);
  }
  return (
    <>
      {props
        ? props.product.map((value, index) => (
            <div className="col-lg-4 col-md-4 col-sm-6 pb-1" key={value.id}>
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
