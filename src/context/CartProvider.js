import { CartContext } from "./CartContext";
import { useReducer } from "react";

const CartProvider = (props) => {

const state = 12;

  return(
    <CartContext.Provider value={state}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;