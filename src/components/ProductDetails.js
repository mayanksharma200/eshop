import React, { useState } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import "./ProductDetails.css"; // Import the custom CSS file

function ProductDetails(props) {
  console.log(props);


  const discountedPrice =
    props.prouductDetails[0].price -
    (props.prouductDetails[0].price * props.prouductDetails[0].discountPercentage) / 100;

  // State for the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === props.prouductDetails[0].images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? props.prouductDetails[0].images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="product-details-container">
        <div className="product-details-grid">
          {/* Product Images */}
          <div className="product-images">
            <div className="custom-carousel">
              <img
                src={props.prouductDetails[0].images[currentImageIndex]}
                alt={`Product Image ${currentImageIndex + 1}`}
                className="carousel-image"
              />
              <button className="carousel-button prev" onClick={prevImage}>
                &#10094;
              </button>
              <button className="carousel-button next" onClick={nextImage}>
                &#10095;
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="product-info">
            <h1 className="product-title">{props.prouductDetails[0].title}</h1>
            <h2 className="product-brand">by {props.prouductDetails[0].brand}</h2>

            {/* Product Rating */}
            <div className="product-rating">
              <span className="rating-badge">{props.prouductDetails[0].rating} / 5</span>
            </div>

            {/* Product Price and Discount */}
            <div className="price-section">
              <p className="discounted-price">${discountedPrice.toFixed(2)}</p>
              <p className="original-price">${props.prouductDetails[0].price}</p>
              <p className="discount-percentage">
                Save {props.prouductDetails[0].discountPercentage}%
              </p>
            </div>

            {/* Product Availability and Stock */}
            <div className="availability">
              <p className="availability-status">
                {props.prouductDetails[0].availabilityStatus} ({props.prouductDetails[0].stock} in stock)
              </p>
            </div>

            {/* Add to Cart and Buy Now Buttons */}
            <div className="action-buttons">
              <button className="add-to-cart">Add to Cart</button>
              <button className="buy-now">Buy Now</button>
            </div>

            {/* Product Description */}
            <div className="description">
              <h3>Description</h3>
              <p>{props.prouductDetails[0].description}</p>
            </div>

            {/* Product Dimensions */}
            <div className="dimensions">
              <h3>Dimensions</h3>
              <p>Width: {props.prouductDetails[0].dimensions.width} cm</p>
              <p>Height: {props.prouductDetails[0].dimensions.height} cm</p>
              <p>Depth: {props.prouductDetails[0].dimensions.depth} cm</p>
            </div>

            {/* Product Shipping Information */}
            <div className="shipping-info">
              <h3>Shipping Information</h3>
              <p>{props.prouductDetails[0].shippingInformation}</p>
            </div>

            {/* Product Return Policy */}
            <div className="return-policy">
              <h3>Return Policy</h3>
              <p>{props.prouductDetails[0].returnPolicy}</p>
            </div>

            {/* Product Warranty Information */}
            <div className="warranty-info">
              <h3>Warranty Information</h3>
              <p>{props.prouductDetails[0].warrantyInformation}</p>
            </div>

            {/* Product Tags */}
            <div className="tags">
              <h3>Tags</h3>
              <ul className="tags-list">
                {props.prouductDetails[0].tags.map((tag, index) => (
                  <li key={index} className="tag-item">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product Reviews */}
        <div className="reviews">
          <h3>Customer Reviews</h3>
          {props.prouductDetails[0].reviews.map((review, index) => (
            <div key={index} className="review-card">
              <h4 className="reviewer-name">{review.name}</h4>
              <p className="review-rating">{review.rating} / 5</p>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
    prouductDetails: state.ProudctDetails,
  };
};

export default connect(mapStateToProps)(ProductDetails);
