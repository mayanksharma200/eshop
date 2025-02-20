// Initial state
const initialState = {
  cart: [],
};

// Action
export const updateCart = (data) => {
  return {
    type: "UPDATE_CART",
    payload: data,
  };
};

// Reducer
const myReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_CART") {
    let cart = [...state.cart];
    let itemIndex = cart.findIndex((item) => item.id === action.payload.id);

    if (itemIndex !== -1) {
      // If item already exists, increment the duplicate count
      cart[itemIndex] = {
        ...cart[itemIndex],
        duplicate: (cart[itemIndex].duplicate || 1) + 1,
      };
    } else {
      // If item does not exist, add it with duplicate: 1
      cart.push({ ...action.payload, duplicate: 1 });
    }

    return { ...state, cart };
  } else {
    return state;
  }
};

export default myReducer;
