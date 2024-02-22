import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './Cart.css';

const Cart = () => {
  const [cartState, dispatch] = useContext(CartContext);
  console.log(cartState.cart);
  return (
    <div className="cart-container">
      <div className="cart-items-container">
        <ul className="cart-items">
          {cartState.cart.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>{item.star}</span>
              <span>{item.description}</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart-price-container">{cartState.totalPrice}</div>
    </div>
  );
}

export default Cart;