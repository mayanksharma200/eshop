import React from 'react'
import { connect } from "react-redux";
import { cartDec, cartInc } from '../reduxEx/myReducer';
import { NavLink } from "react-router-dom";

function Cart(props) {
  console.log(props)
  const cartItems = props && props.cartItems
  let flag = cartItems.length === 0;
  console.log(cartItems, 'carttttttttttt')
  const totalCartItems = cartItems.map((value, index)=>{
   return value && value.quantity > 1
     ? value.quantity *
         parseInt(value.price - value.price * (value.discountPercentage / 100))
     : parseInt(value.price - value.price * (value.discountPercentage / 100));
  })
  const subTotal = totalCartItems.reduce((acc, curr) => acc + curr, 0);
  const shipCharge = cartItems.length !== 0 ? 10 : 0

  function onClickMinus(data){
    console.log(data, 'quantity update');
    props.cartItemDecrement(data)
    console.log(props.cartItems);
    }
  function onClickPlus(data){
    console.log(data, 'quantity update');
    props.cartItemIncrement(data)
    console.log(props.cartItems);
    }
  return (
    <>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {props &&
                  cartItems.map((value, index) => (
                    <tr key={value.id}>
                      <td className="align-middle">
                        <img
                          src="img/product-1.jpg"
                          alt=""
                          style={{ width: 50 }}
                        />{" "}
                        {value.title}
                      </td>
                      <td className="align-middle">
                        ${" "}
                        {value && value.quantity > 1
                          ? value.quantity *
                            parseInt(
                              value.price -
                                value.price * (value.discountPercentage / 100)
                            )
                          : parseInt(
                              value.price -
                                value.price * (value.discountPercentage / 100)
                            )}
                      </td>
                      <td className="align-middle">
                        <div
                          className="input-group quantity mx-auto"
                          style={{ width: 100 }}
                        >
                          <a onClick={() => onClickMinus(value)}>
                            <div className="input-group-btn">
                              <button className="btn btn-sm btn-primary btn-minus">
                                <i className="fa fa-minus" />
                              </button>
                            </div>
                          </a>
                          <input
                            type="text"
                            className="form-control form-control-sm bg-secondary border-0 text-center"
                            value={value.quantity}
                          />
                          <a onClick={() => onClickPlus(value)}>
                            <div className="input-group-btn">
                              <button className="btn btn-sm btn-primary btn-plus">
                                <i className="fa fa-plus" />
                              </button>
                            </div>
                          </a>
                        </div>
                      </td>
                      <td className="align-middle">
                        <b>
                          ${" "}
                          {value && value.quantity > 1
                            ? value.quantity *
                              parseInt(
                                value.price -
                                  value.price * (value.discountPercentage / 100)
                              )
                            : parseInt(
                                value.price -
                                  value.price * (value.discountPercentage / 100)
                              )}
                        </b>
                      </td>
                      <td className="align-middle">
                        <button className="btn btn-sm btn-danger">
                          <i className="fa fa-times" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <form className="mb-30" action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-0 p-4"
                  placeholder="Coupon Code"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary">Apply Coupon</button>
                </div>
              </div>
            </form>
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Cart Summary</span>
            </h5>
            <div className="bg-light p-30 mb-5">
              <div className="border-bottom pb-2">
                <div className="d-flex justify-content-between mb-3">
                  <h6>Subtotal</h6>
                  <h6>$ {subTotal}</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">$ {shipCharge}</h6>
                </div>
              </div>
              <div className="pt-2">
                <div className="d-flex justify-content-between mt-2">
                  <h5>Total</h5>
                  <h5>$ {subTotal + shipCharge}</h5>
                </div>
                <NavLink to="/Checkout">
                  <button
                    disabled={flag}
                    className="btn btn-block btn-primary font-weight-bold my-3 py-3"
                  >
                    Proceed To Checkout
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
  };
};

const mapDispatchToProps = (dispatch)=>{
  return {
    cartItemDecrement: (data) => dispatch(cartDec(data)),
    cartItemIncrement: (data) => dispatch(cartInc(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);