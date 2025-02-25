import ProductDetails from "../components/ProductDetails";

// Initial state
const initialState = {
  cart: [],
  ProudctDetails: [],
};

// Action

export const prouductDetailsCurr = (data) => {
  return {
    type: "Current_Product_Details",
    payload: data,
  };
};

export const updateCart = (data) => {
  return {
    type: "UPDATE_CART",
    payload: data,
  };
};
export const cartDec = (data) => {
  return {
    type: "decrement_Cart_Item",
    payload: data,
  };
};
export const cartInc = (data) => {
  return {
    type: "increment_Cart_Item",
    payload: data,
  };
};

// Reducer
const myReducer = (state = initialState, action) => {
  let cart = [...state.cart];
  let ProudctDetails = [...state.ProudctDetails];

  if (action.type === "Current_Product_Details") {
    ProudctDetails = [(ProductDetails, { ...action.payload })];
    return { ...state, ProudctDetails };
  }
  if (action.type === "UPDATE_CART") {
    let itemIndex = cart.findIndex((item) => item.id === action.payload.id);

    if (itemIndex !== -1) {
      // If item already exists, increment the quantity count
      cart[itemIndex] = {
        ...cart[itemIndex],
        quantity: (cart[itemIndex].quantity || 1) + 1,
      };
    } else {
      // If item does not exist, add it with quantity: 1
      cart.push({ ...action.payload, quantity: 1 });
    }

    return { ...state, cart };
  }
  if (action.type === "decrement_Cart_Item") {
    let itemIndex = cart.findIndex((item) => item.id === action.payload.id);

    if (itemIndex !== -1) {
      // Decrement the quantity
      cart[itemIndex] = {
        ...cart[itemIndex],
        quantity: cart[itemIndex].quantity - 1,
      };

      // If quantity is 0, remove the item from the cart
      if (cart[itemIndex].quantity === 0) {
        cart.splice(itemIndex, 1);
      }
    }

    return { ...state, cart };
  }
  if (action.type === "increment_Cart_Item") {
    let itemIndex = cart.findIndex((item) => item.id === action.payload.id);
    if (itemIndex !== -1) {
      cart[itemIndex] = {
        ...cart[itemIndex],
        quantity: cart[itemIndex].quantity + 1,
      };
    }
    return { ...state, cart };
  } else {
    return state;
  }
};

export default myReducer;
