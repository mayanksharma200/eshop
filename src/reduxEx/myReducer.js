// state
const initialState = {
    cart:[]
};

// actions
export const updateCart =(data)=>{
    return{
        type:'update_Cart', payload:data
    }
}

// reducer
const myReducer = (state = initialState, action) => {
    if(action.type == 'update_Cart'){
        return{...state, 
            cart:[...state.cart, action.payload]
        }
    }
    else{
        return {
            ...state
        }
    }
};
export default myReducer;