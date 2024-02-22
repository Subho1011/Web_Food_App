import { CartContext } from "./CartContext";
import { useReducer } from "react";

const initialState = {
  cart: [],
  totalPrice: 0
};

const cartReducer = (state, action) => {
  let itemIsPresent;
  switch (action.type) {
    case 'ADD_TO_CART':
      itemIsPresent = state.cart.includes(action.payload, 0);
      if (itemIsPresent) {
        return;
      } else {
        return { ...state, cart: [...state.cart, action.payload], totalPrice: state.totalPrice + action.payload.price };
      }
    case 'REMOVE_FROM_CART':
      const updatedCart = state.cart.filter((item) => item.id !== action.payload.id);
      return { ...state, cart: [...updatedCart], totalPrice: state.totalPrice - action.payload.price };
    default:
      return state;
  }
};


const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={[cartState, dispatch]}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;